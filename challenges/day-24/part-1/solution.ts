export class Solution {

  public solve(input) {
    let presents = input.split('\n').map((present) => parseInt(present.trim()));


    let balancedSection = presents.reduce((x, y) => x + y) / 3;
    console.log(balancedSection);

    let validConfigurations = this._findCombos(presents, balancedSection, [], [[], [], []])

    return validConfigurations;
   }

   private _findCombos(remainingPossibilities: Array<number>, target: number, combos: Array<Array<Array<number>>>, currentCombo: Array<Array<number>>): Array<Array<Array<number>>> {

      for (let i = 0; i < remainingPossibilities.length; i++) {
        for (let j = 0; j < currentCombo.length; j++) {
          if (currentCombo[j].length > 0 && currentCombo[j].reduce((x, y) => x + y) + remainingPossibilities[i] > target){
            continue;
          }
          let newCombo = currentCombo[j].concat([remainingPossibilities[i]]);
          console.log(newCombo);
          this._findCombos(remainingPossibilities.slice(i + 1, remainingPossibilities.length), target, combos, newCombo);
        }
     }
     console.log(currentCombo);
     combos.push(currentCombo);

      return combos;
   }
}
