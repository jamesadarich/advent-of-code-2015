export class Solution {

  public solve(input) {
  var output = input.value;

    for (var j = 0; j < input.iterations; j++) {
    input.value = output;
      output = '';
    var count = 1;

    for (var i = 1; i < input.value.length; i++) {
      if (input.value[i] !== input.value[i - 1]) {
         output += count;
         output += input.value[i - 1];
         count = 1;
      }
      else {
         count++;
      }
    }

    for (var i = 0; i < input.value.length; i++) {
      if (input.value[input.value.length - i - 1] !== input.value[input.value.length - i - 2]) {
         output += i + 1;
         output += input.value[input.value.length - i - 1];
         break;
      }
   }
}
   return output.length;



  }
}
