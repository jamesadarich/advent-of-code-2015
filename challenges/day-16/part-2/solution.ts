export class Solution {

  public solve(input) {
     var targetSue = new Sue(input.targetSue);

     var knownSueInfos = input.allSues.split('\n');

     var knownSues: Array<Sue>;
     var actualSue: Sue;

     knownSues = [];

     for (var i = 0; i < knownSueInfos.length; i++) {
        knownSues.push(new Sue(knownSueInfos[i]));
     }

     for (var i = 0; i < knownSues.length; i++) {
        var isRealSue = true;
        for (var property in knownSues[i]) {

           if (property !== 'name') {
             if (property === 'cats' || property === 'trees') {
                if (knownSues[i][property] <= targetSue[property]) {
                isRealSue = false;
                break;
             }
             }
              else if (property === 'pomeranians' || property === 'goldfish') {
                 if (knownSues[i][property] >= targetSue[property]) {
                 isRealSue = false;
                 break;
              }
              }
             else if (knownSues[i][property] !== targetSue[property]) {

                isRealSue = false;
                break;
             }
          }
        }

        if (isRealSue) {
           if (actualSue !== undefined) {
             console.log("multi sue!");
          }
           actualSue = knownSues[i];
        }
     }

     return actualSue


 }
}

class Sue {
   public name: string;
  public constructor(sueInfo: string) {
    var sueInfoItems = sueInfo.split(' ');

    this.name = sueInfoItems[1].substring(0, sueInfoItems[1].length - 1);

    for (var i = 2; i < sueInfoItems.length; i += 2) {
      if (sueInfoItems[i + 1].indexOf(',') === -1) {
      this[sueInfoItems[i].substring(0, sueInfoItems[i].length - 1)] = parseInt(sueInfoItems[i + 1]);
   }
   else {
   this[sueInfoItems[i].substring(0, sueInfoItems[i].length - 1)] = parseInt(sueInfoItems[i + 1].substring(0, sueInfoItems[i + 1].length - 1));

   }
   }
  }
}
