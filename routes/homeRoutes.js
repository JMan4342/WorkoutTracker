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

// router.get("/", async function (req, res) {
//   try {
//     const lastWorkout = await Workout.findOne({
//     });

//     //   LAST WORKOUT
//     // Need to render <h3>Last Workout</h3> on index.html
//     const exercises = exerciseData.map((project) => project.get({ plain: true }));
//     console.log(blogs);
//     res.render("/", {
//       id.innerHTML = "Last Workout";
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/stats", async function (req, res) {
  
//   const statsData = await Workout.findAll({
//     where: { userId: req.session.user_id },
//   });
//   const stats = statsData.map((project) => project.get({ plain: true }));
//   console.log(stats);
//   res.render("stats", {
//   });
// });

// router.get("/exercise/:id", async function (req, res) {
//   try {
//     const exerciseData = await Workout.findOne(req.params.id, {
//     });
//     res.render("exercise", {

//     });
//     console.log(blogData)
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


module.exports = router;