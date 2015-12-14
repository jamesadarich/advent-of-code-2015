export class Solution {

  public solve(input) {
    var reindeer = input.instructions.split('\n').map((instruction) => {  instruction = instruction.trim(); return {
      speed: parseInt(instruction.split(' ')[3]),
      flightTime: parseInt(instruction.split(' ')[6]),
      restTime: parseInt(instruction.split(' ')[13])
   }});

   for (var i = 0; i < reindeer.length; i++) {
      var cycles = Math.floor(input.timeFlying / (reindeer[i].flightTime + reindeer[i].restTime));
      var remainder = input.timeFlying % (reindeer[i].flightTime + reindeer[i].restTime);

      if (remainder > reindeer[i].flightTime) {
         reindeer[i].distance = reindeer[i].speed * (reindeer[i].flightTime * (cycles + 1));
      }
      else {
         reindeer[i].distance = reindeer[i].speed * (remainder + (reindeer[i].flightTime * (cycles)));
      }
   }

   return Math.max.apply(Math, reindeer.map((r) => r.distance));

  }
}
