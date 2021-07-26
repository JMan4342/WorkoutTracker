const router = require('express').Router();
const Workout = require('../models/workout');

router.post("POST", ({ body }, res) => {
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
  
  module.exports = router;