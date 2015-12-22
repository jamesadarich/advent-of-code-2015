export class Solution {

  public solve(input) {
    let lightRows = input.initialLights.split('\n').map(lightRow => lightRow.split('').map((lightState) => new Light(lightState)));



    for (let i = 0; i < input.iterations; i++) {
      let toggleCoords = [];
      for (let j = 0; j < lightRows.length; j++) {
         for (let k = 0; k < lightRows[j].length; k++) {
            let onNeighbors = 0;


            if (lightRows[j - 1] !== undefined) {
               if (lightRows[j - 1][k - 1] !== undefined && lightRows[j - 1][k - 1].isOn) {
                  onNeighbors++;
               }

               if (lightRows[j - 1][k] !== undefined && lightRows[j - 1][k].isOn) {
                  onNeighbors++;
               }

               if (lightRows[j - 1][k + 1] !== undefined && lightRows[j - 1][k + 1].isOn) {
                  onNeighbors++;
               }
            }
            if (lightRows[j] !== undefined) {
               if (lightRows[j][k - 1] !== undefined && lightRows[j][k - 1].isOn) {
                  onNeighbors++;
               }

               if (lightRows[j][k + 1] !== undefined && lightRows[j][k + 1].isOn) {
                  onNeighbors++;
               }
            }
            if (lightRows[j + 1] !== undefined) {
               if (lightRows[j + 1][k - 1] !== undefined && lightRows[j + 1][k - 1].isOn) {
                  onNeighbors++;
               }

               if (lightRows[j + 1][k] !== undefined && lightRows[j + 1][k].isOn) {
                  onNeighbors++;
               }

               if (lightRows[j + 1][k + 1] !== undefined && lightRows[j + 1][k + 1].isOn) {
                  onNeighbors++;
               }
            }

            if (lightRows[j][k].isOn && onNeighbors !== 2 && onNeighbors !== 3) {
               toggleCoords.push({
                  x: j,
                  y: k
               });
            }
            else if (!lightRows[j][k].isOn && onNeighbors === 3) {
               toggleCoords.push({
                  x: j,
                  y: k
               });
            }
         }
      }

      for (let j = 0; j < toggleCoords.length; j++) {
         lightRows[toggleCoords[j].x][toggleCoords[j].y].toggle();
      }
   }

    let onCount = 0;
    for (let i = 0; i < lightRows.length; i++) {
      onCount += lightRows[i].filter(x => x.isOn).length;
   }

   return onCount;
 }
}

class Light {
   isOn: boolean;

   constructor(lightState: string) {
      if (lightState === "#") {
         this.isOn = true;
      }
      else {
         this.isOn = false;
      }
   }

   toggle() {
      this.isOn = !this.isOn;
   }
}
