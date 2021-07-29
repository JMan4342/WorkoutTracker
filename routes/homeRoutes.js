const router = require("express").Router();
const { Workout } = require("../models");
const path = require("path");

router.get("/", async function (req, res) {
res.sendFile(path.join(__dirname, "../public/index.html"))
})

router.get("/stats", async function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"))

})

router.get("/exercise", async function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"))

})

module.exports = router;