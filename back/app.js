const express = require("express");
const helmet = require("helmet");
const bodyParser = require("bodyParser");
const errorhandler = require("errorhandler");
const logger = require("morgan");

const recordsRouter = require("./routes/records");
require("dotenv").config();

const app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(bodyParser.json());
if (process.env.NODE_ENV === "development") {
  app.use(errorhandler());
}
app.use("/records", recordsRouter);

module.exports = app;
