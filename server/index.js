const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const {
  getAllEntries,
  getEntryById,
  getEntriesByBorough,
  updateFountainState,
  postTweet,
} = require("./handlers");

const { autoRetweet } = require("./autoRetweet");

setInterval(() => {
  autoRetweet();
}, 10800000);

const PORT = process.env.PORT || 3333;

let app = express();

var cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

app.get("/all", getAllEntries);

app.get("/fountain/:_id", getEntryById);

app.get("/fountains/:borough", getEntriesByBorough);

app.patch("/fountain/:_id", updateFountainState);

app.post("/posttweet", postTweet);

const server = app.listen(PORT, () => {
  console.info("🌍 Listening on port " + server.address().port);
});
