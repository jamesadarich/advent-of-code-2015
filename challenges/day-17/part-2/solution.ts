export class Solution {

  public solve(input) {
    let containers = input.containers.split('\n').map((container) => parseInt(container));

    let combos = [];

    for (let i = 0; i < containers.length; i++) {
      let currentScore = containers[i];
      if (currentScore === input.target) {
         combos.push([containers[i]]);
         continue;
      }
      else {
         combos = this._findCombos(containers.slice(i + 1, containers.length), input.target, combos, [containers[i]]);
      }
   }

   var min = Math.min.apply(Math, combos.map((combo) => combo.length));

   var minCombos = combos.filter((combo) => combo.length === min);

   return minCombos.length;
 }

  private _findCombos(remainingPossibilities: Array<number>, target: number, combos: Array<Array<number>>, currentCombo: Array<number>): Array<Array<number>> {

     for (let i = 0; i < remainingPossibilities.length; i++) {

        if (currentCombo.reduce((a, b) => a + b) + remainingPossibilities[i] === target) {
           combos.push(currentCombo.concat([remainingPossibilities[i]]););
        }
        else if (currentCombo.reduce((a, b) => a + b) + remainingPossibilities[i] < target) {
           combos = this._findCombos(remainingPossibilities.slice(i + 1, remainingPossibilities.length), target, combos, currentCombo.concat([remainingPossibilities[i]]));
        }

    }
    
     return combos;
  }
}
