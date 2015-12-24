export class Solution {

  public solve(input) {
    let transforms = input.transformations.split('\n').map((transformation) => { return {
      from: transformation.trim().split(' ')[0],
       to: transformation.trim().split(' ')[2] }
    });


/*
     for (var i = 0; mutatedStrings.indexOf(input.target) === -1; i++) {

        let newMutations = [];

        for (let j = 0; j < mutatedStrings.length; j++) {

        for (let k = 0; k < transforms.length; k++) {
           let searchIndex = 0;
           let nextIndex = 0;
           while (nextIndex > -1) {
              nextIndex = mutatedStrings[j].indexOf(transforms[k].from, searchIndex);

              if (nextIndex !== -1) {
                 var mutation = mutatedStrings[j].substr(0, nextIndex) + transforms[k].to + mutatedStrings[j].substr(nextIndex + transforms[k].from.length);

                 if (mutatedStrings.indexOf(mutation) === -1 && newMutations.indexOf(mutation) === -1) {
                    newMutations.push(mutation);
                    //console.log(mutatedStrings[j], "=>", mutation);
                 }

                 searchIndex = nextIndex + 1;

                 if (searchIndex > mutatedStrings[j].length) {
                    break;
                 }
              }
           }

           }

     }


     mutatedStrings = newMutations;
  }
  */

  let mutatedStrings = [input.target];
  let maxLength = input.target.length;

  for (var i = 0; mutatedStrings.indexOf(input.initial) === -1; i++) {

     let newMutations = [];

     for (let j = 0; j < mutatedStrings.length; j++) {

     for (let k = 0; k < transforms.length; k++) {
        let searchIndex = 0;
        let nextIndex = 0;
        while (nextIndex > -1) {
           nextIndex = mutatedStrings[j].indexOf(transforms[k].to, searchIndex);

           if (nextIndex !== -1) {
              var mutation = mutatedStrings[j].substr(0, nextIndex) + transforms[k].from + mutatedStrings[j].substr(nextIndex + transforms[k].to.length);

              if (mutatedStrings.indexOf(mutation) === -1 && newMutations.indexOf(mutation) === -1 && mutation.length <= maxLength) {
                 newMutations.push(mutation);
                 //console.log(mutatedStrings[j], "=>", mutation);
              }

              searchIndex = nextIndex + 1;

              if (searchIndex > mutatedStrings[j].length) {
                 break;
              }
           }
        }

        }

  }

  maxLength--;
  console.log(maxLength);
  mutatedStrings = newMutations;
}

   return i;
}
}
