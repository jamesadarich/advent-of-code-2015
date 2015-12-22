export class Solution {

  public solve(input) {

    var decodedString = "";

    var strings = input.split('\n');
    for (var i = 0; i < strings.length; i++) {

       decodedString += eval(strings[i]);
   }

   return decodedString.length;
 }
}
