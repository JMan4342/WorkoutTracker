// Calculate total pounds
db.workout.aggregate(
    [
      {
        $group:
          {
            totalWeight: { $sum: { $multiply: [ "$weight", "$reps", "$sets" ] } },
          }
      }
    ]
 )

 db.workout.aggregate(
    [
      {
        $addFields:
          {
            totalDuration: { $sum: '$exercises.duration' },
            totalWeight: { $sum: { $multiply: [ "$weight", "$reps", "$sets" ] } },
          }
      }
    ]
 )