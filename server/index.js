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

const PORT = process.env.PORT || 5000;

let app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/all", getAllEntries);

app.get("/fountain/:_id", getEntryById);

app.get("/fountains/:borough", getEntriesByBorough);

app.patch("/fountain/:_id", updateFountainState);

app.post("/posttweet", postTweet);

// app.get("/tweetstream", retweetPosts);

const server = app.listen(PORT, () => {
  console.info("🌍 Listening on port " + server.address().port);
});
