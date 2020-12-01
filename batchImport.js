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
  try {
    await client.connect();
    const db = client.db("projet_fontaine");
    const result = await db.collection("fountains").insertMany(fountains);
    console.log(result);
    assert.equal(fountains.length, result.insertedCount);
    console.log("SUCCESS");
  } catch (err) {
    console.log("ERROR");
    console.log(err.stack);
  }

  client.close();
};

batchImport();
