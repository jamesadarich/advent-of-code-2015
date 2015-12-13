export class Solution {

  public solve(input) {
    console.log('test11');

    var challengeOutput = 0;
    for(var thing in input) {
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
      if (typeof things[thing] !== 'number') {
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
