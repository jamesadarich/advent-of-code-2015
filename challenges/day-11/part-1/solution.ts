export class Solution {

  public solve(input) {

    while (true) {
        for (var i = 0; i < input.length; i++) {

           if (input.charCodeAt(input.length - i - 1) === 122) {
              input = input.substr(0, input.length - i - 1) + 'a' + input.substr(input.length - i);
           }
           else {
              var nextChar = String.fromCharCode(input.charCodeAt(input.length - i - 1) + 1));
              input = input.substr(0, input.length - i - 1) + nextChar + input.substr(input.length - i);
              break;
           }
        }

        return input;

     }
   }
}
