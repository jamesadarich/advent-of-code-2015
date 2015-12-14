export class Solution {

  public solve(input) {

    var reindeer = input.instructions.split('\n').map((instruction) => {  instruction = instruction.trim(); return {
      speed: parseInt(instruction.split(' ')[3]),
      flightTime: parseInt(instruction.split(' ')[6]),
      restTime: parseInt(instruction.split(' ')[13]),
      distance: 0,
      score: 0
   }});

   for (var i = 0; i < input.timeFlying; i++) {
      for (var j = 0; j < reindeer.length; j++) {
         if (i % (reindeer[j].flightTime + reindeer[j].restTime) < reindeer[j].flightTime) {
            reindeer[j].distance += reindeer[j].speed;
         }
      }

      var leaderDistance = Math.max.apply(Math, reindeer.map((r) => r.distance));

      var leadingReindeer = reindeer.filter((r) => r.distance === leaderDistance);

      for (var k = 0; k < leadingReindeer.length; k++) {
         leadingReindeer[k].score++;
      }

   }

   return Math.max.apply(Math, reindeer.map((r) => r.score));

  }
}
