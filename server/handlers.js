"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const assert = require("assert");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getAllEntries = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db("projet_fontaine");
  const fountains = await db.collection("fountains").find().toArray();
  const fountainResponse = {};

  fountains.forEach((fountain) => (fountainResponse[fountain._id] = fountain));

  console.log(fountainResponse);

  fountainResponse.length === 0
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
    status(500).json({ status: 500, error: "An unknown error has occured" });
  }

  console.log(fountain);
};

const getEntriesByBorough = (req, res) => {};

module.exports = { getEntryById, getAllEntries, getEntriesByBorough };

// const bookSeat = async (req, res) => {
//   const client = await MongoClient(MONGO_URI, options);
//   await client.connect();
//   const db = client.db("booking_app");

//   const { _id, fullName, email, creditcard, expiration } = req.body;

//   const query = { _id };
//   const newValue = {
//     $set: { isBooked: true, fullName, creditcard, expiration, email },
//   };

//   const seat = await db.collection("seats").findOne({ _id });
//   console.log(seat);

//   if (!seat.isBooked) {
//     try {
//       const result = await db.collection("seats").updateOne(query, newValue);
//       assert.equal(1, result.matchedCount);
//       assert.equal(1, result.modifiedCount);
//       res.status(200).json({ status: 200, _id });
//     } catch (err) {
//       console.log(err.stack);
//       res
//         .status(500)
//         .json({ status: 500, data: req.body, message: err.message });
//     }
//   } else {
//     res
//       .status(400)
//       .json({ status: 400, data: req.body, message: "Seat is aready booked" });
//   }
//   client.close();
// };

// module.exports = { getSeats, bookSeat };
