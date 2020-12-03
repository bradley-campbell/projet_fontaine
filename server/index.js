const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const {
  getAllEntries,
  getEntryById,
  getEntriesByBorough,
} = require("./handlers");

const PORT = 3333;

let app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/all", getAllEntries);

app.get("/fountain/:_id", getEntryById);

app.get("/fountains/borough", getEntriesByBorough);

const server = app.listen(PORT, () => {
  console.info("🌍 Listening on port " + server.address().port);
});
