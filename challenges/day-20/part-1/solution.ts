export class Solution {

  public solve(input) {
    for (let i = 1; i <= input; i++) {
      let factors = this._findFactors(i);

      if (factors.reduce((a, b) => a + b) * 10 >= input) {
        return i;
      }
    }

    return null;
   }

   private _findFactors(number: number): Array<number> {
     let sqrt = Math.sqrt(number);
     let factors = [];
     for (let i = 1; i <= sqrt; i++) {
       if (number % i === 0) {
         factors.push(i);
         if (i !== sqrt) {
           factors.push(number / i);
         }
       }
     }

     return factors;
   }
}
