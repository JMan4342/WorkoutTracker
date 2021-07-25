const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Workout = require("./models/workout.js")
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });


// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.post("POST", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// app.get("/read", (req, res) => {
//   db.day.find({ read: true }, (error, found) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.json(found);
//     }
//   });
// });

// app.get("/unread", (req, res) => {
//   db.day.find({ read: false }, (error, found) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.json(found);
//     }
//   });
// });

// app.put("/markread/:id", ({ params }, res) => {
//   db.day.update(
//     {
//       _id: mongojs.ObjectId(params.id)
//     },
//     {
//       $set: {
//         read: true
//       }
//     },

//     (error, edited) => {
//       if (error) {
//         console.log(error);
//         res.send(error);
//       } else {
//         console.log(edited);
//         res.send(edited);
//       }
//     }
//   );
// });

// app.put("/markunread/:id", ({ params }, res) => {
//   db.day.update(
//     {
//       _id: mongojs.ObjectId(params.id)
//     },
//     {
//       $set: {
//         read: false
//       }
//     },

//     (error, edited) => {
//       if (error) {
//         console.log(error);
//         res.send(error);
//       } else {
//         console.log(edited);
//         res.send(edited);
//       }
//     }
//   );
// });

app.listen(PORT, () => {
  console.log("App running on port ${PORT}!");
});
