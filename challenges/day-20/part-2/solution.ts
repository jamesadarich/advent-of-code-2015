export class Solution {

  public solve(input) {

    let closest = 0;

    //return this._findFactors(150);
    for (let i = 1; i <= input; i++) {

      let factors = this._findFactors(i);
      if (factors.length > 0) {
      let result =  factors.reduce((a, b) => a + b) * 11;
      //console.log(i, "=>", factors, "=>", result);
      if (result > closest){
        closest = result;
        console.log(i, "=>", result);
      }
      if (result >= input) {
          return i;
        }
      }
    }



    return null;
   }

   private _findFactors(number: number): Array<number> {
     let finish = 50;
     let sqrt = 51;
     if (number < 2500) {
       sqrt = Math.sqrt(number);
       finish = sqrt;
     }
     let factors = [];
     let start = Math.ceil(number / 50);
     for (let i = 1; i <= finish; i++) {
       if (number % i === 0) {
         if (number / i <= 50) {
           factors.push(i);
         }
         if (i !== finish) {
           factors.push(number / i);
         }
       }
     }

     return factors;
   }
}
