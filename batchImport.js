fs = require("file-system");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const assert = require("assert");
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const fountains = JSON.parse(fs.readFileSync("data/fountains.json"));

const batchImport = async () => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("projet_fontaine");

  try {
    const result = await db.collection("fountains").insertMany(fountains);
    console.log(result);
    assert.equal(fountains.length, result.insertedCount);
    console.log("res: 201");
  } catch (err) {
    console.log("res 500");
    console.log(err.stack);
  }

  client.close();
};

batchImport();
