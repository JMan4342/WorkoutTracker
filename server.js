const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const Workout = require("./models/workout.js");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false});

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.use(require("./routes/api"));
app.use(require("./routes/homeRoutes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
