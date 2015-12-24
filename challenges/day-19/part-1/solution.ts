export class Solution {

  public solve(input) {
    var transforms = input.transformations.split('\n').map((transformation) => { return {
      from: transformation.trim().split(' ')[0],
       to: transformation.trim().split(' ')[2] }
    });

   var mutatedStrings = [];

   for (let i = 0; i < transforms.length; i++) {
      let searchIndex = 0;
      let nextIndex = 0;
      while (nextIndex > -1) {
         nextIndex = input.initial.indexOf(transforms[i].from, searchIndex);

         if (nextIndex !== -1) {
            var mutation = input.initial.substr(0, nextIndex) + transforms[i].to + input.initial.substr(nextIndex + transforms[i].from.length);

            if (mutatedStrings.indexOf(mutation) === -1) {
               mutatedStrings.push(mutation);
            }

            searchIndex = nextIndex + 1;

            if (searchIndex > input.initial.length) {
               break;
            }
         }
      }
   }

   return mutatedStrings.length;
 }
}
