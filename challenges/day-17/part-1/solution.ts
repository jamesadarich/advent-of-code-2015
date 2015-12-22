export class Solution {

  public solve(input) {
    let containers = input.containers.split('\n').map((container) => parseInt(container));

    let combos = 0;

    for (let i = 0; i < containers.length; i++) {
      let currentScore = containers[i];
      if (currentScore === input.target) {
         combos++;
         continue;
      }
      else {
         combos = this._findCombos(containers.slice(i + 1, containers.length), input.target, combos, [containers[i]]);
      }
   }

   return combos;
 }

  private _findCombos(remainingPossibilities: Array<number>, target: number, combos: number, currentCombo: Array<number>): number {

     for (let i = 0; i < remainingPossibilities.length; i++) {

        if (currentCombo.reduce((a, b) => a + b) + remainingPossibilities[i] === target) {
           combos++;
        }
        else if (currentCombo.reduce((a, b) => a + b) + remainingPossibilities[i] < target) {
           combos = this._findCombos(remainingPossibilities.slice(i + 1, remainingPossibilities.length), target, combos, currentCombo.concat([remainingPossibilities[i]]));
        }

    }

     return combos;
  }
}
