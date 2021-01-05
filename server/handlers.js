"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const {
  MONGO_URI,
  TWITTER_API_KEY,
  TWITTER_API_SECRET_KEY,
  TWITTER_ACCESS_TOKEN,
  TWITTER_ACCESS_TOKEN_SECRET,
} = process.env;
const assert = require("assert");
var Twit = require("twit");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

var T = new Twit({
  consumer_key: TWITTER_API_KEY,
  consumer_secret: TWITTER_API_SECRET_KEY,
  access_token: TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

const getAllEntries = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db("projet_fontaine");
  const fountains = await db
    .collection("fountains")
    .find()
    .project({ lng: 1, lat: 1 }) // Used projection to only query for ID, lat and lng only
    .toArray();

  console.log(fountains);

  fountains.length === 0
    ? res.status(404).json({ status: 400, error: "No data was found" })
    : res.status(200).json({ status: 200, data: fountains });

  client.close();
};

const getEntryById = async (req, res) => {
  const { _id } = req.params;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("projet_fontaine");

  try {
    const fountain = await db.collection("fountains").findOne({ _id });
    res.status(200).json({ status: 200, data: fountain });
  } catch (err) {
    res
      .status(500)
      .json({ status: 500, error: "An unknown error has occured" });
  }

  client.close();
};

const getEntriesByBorough = async (req, res) => {
  const { borough } = req.params;

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("projet_fontaine");

  const fountains = await db
    .collection("fountains")
    .find({ arrondissement: borough })
    .project({ lng: 1, lat: 1 })
    .toArray();
  // Changed to find only entries from matching boroughs instead of filtering all results and return only id, lat, lng

  console.log(borough);
  console.log(fountains);

  fountains.length === 0
    ? res
        .status(400)
        .json({ status: 400, error: "An unknown error has occured" })
    : res.status(200).json({
        status: 200,
        data: fountains,
      });

  client.close();
};

const updateFountainState = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("projet_fontaine");

  const { data, date } = req.body;

  const { _id } = req.params;
  const query = { _id };
  const newValue = {
    $push: { état: `${data.rating} - ${date}` },
  };

  try {
    const result = await db.collection("fountains").updateOne(query, newValue);
    assert.equal(1, result.matchedCount);
    assert.equal(1, result.modifiedCount);
    res.status(200).json({ status: 200, _id });
  } catch (err) {
    res
      .status(500)
      .json({ status: 500, data: req.query, message: err.message });
  }

  client.close();
};

const postTweet = async (req, res) => {
  const {
    feedback,
    fountainData: { _id, arrondissement, nom_parc_lieu, lat, lng },
    boroughInfo: { twitterHandle }, // Twitter handle for borough where fountain is located - @MTL_Ville if borough has no Twitter account
  } = req.body;

  T.post(
    "statuses/update",
    {
      status: `Un.e utilisateur.trice a donné son avis sur la fontaine à boire no. ${_id}, située au parc/lieu: ${nom_parc_lieu} (${arrondissement}), jugeant qu'elle est en "${feedback.data.FR}" - ${feedback.data.rating}.`,
      lat: lat,
      long: lng,
    },
    function (err, data, response) {
      res.status(200).json({ status: 200, response: response });
    }
  );
};

module.exports = {
  getEntryById,
  getAllEntries,
  getEntriesByBorough,
  updateFountainState,
  postTweet,
};
