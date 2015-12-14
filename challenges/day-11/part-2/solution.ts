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

        if (input.indexOf('i') === -1 && input.indexOf('o') === -1 && input.indexOf('l') === -1) {
           var pairs = [];
           for (var i = 1; i < input.length; i++) {
             if (input.charCodeAt(i - 1) === input.charCodeAt(i) && pairs.indexOf(input[i]) === -1) {
                pairs.push(input[i]);
             }
          }

          if (pairs.length >= 2) {



            for (var i = 2; i < input.length; i++) {
              if (input.charCodeAt(i - 1) === input.charCodeAt(i) - 1 && input.charCodeAt(i - 2) === input.charCodeAt(i - 1) - 1) {

                   return input;
              }
           }
          }

        }
     }
   }
}
