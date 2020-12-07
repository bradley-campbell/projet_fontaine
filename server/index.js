const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const {
  getAllEntries,
  getEntryById,
  getEntriesByBorough,
  updateFountainState,
} = require("./handlers");

const PORT = 3333;

let app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/all", getAllEntries);

app.get("/fountain/:_id", getEntryById);

app.get("/fountains/:borough", getEntriesByBorough);

app.patch("/fountain/:_id", updateFountainState);

const server = app.listen(PORT, () => {
  console.info("🌍 Listening on port " + server.address().port);
});
