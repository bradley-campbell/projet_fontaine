const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const PORT = 3333;

let app = express();

app.use(express.json());
app.use(morgan("dev"));

const server = app.listen(PORT, () => {
  console.info("🌍 Listening on port " + server.address().port);
});
