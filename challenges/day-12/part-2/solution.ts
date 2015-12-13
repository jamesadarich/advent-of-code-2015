var inputs = require('./inputs');

export class Solution {

  public solve(input) {

    var challengeOutput = 0;
    for(var thing in input) {

      if (input[thing] == "red" && isNaN(parseInt(thing))) {
        return 0;
      }
      challengeOutput += this._getValue(input[thing]);
    }

    return challengeOutput;
  }

  private _getValue(things) {

    if (typeof things !== 'object') {
      if (isNaN(parseFloat(things))) {
        return 0;
      }
      return parseFloat(things);
    }

    var value = 0;

    for(var thing in things) {
      if (things[thing] === "red" && isNaN(parseInt(thing))) {
        return 0;
      }
      else if (typeof things[thing] !== 'number') {
        value += this._getValue(things[thing]);
      }
      else {
        if (isNaN(parseFloat(things[thing]))) {
          this._getValue(things[thing]);
        }
        value += parseFloat(things[thing]);
      }
    }

    return value;
  }
}
