// Calculate total weight and workout duration

 db.workout.aggregate(
    [
      {
        $addFields:
          {
            totalDuration: { $sum: '$exercises.duration' },
            // totalWeight: { $sum: { $multiply: [ "$weight", "$reps", "$sets" ] } },
          }
      }
    ]
 )