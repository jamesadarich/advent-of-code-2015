export class Solution {

  public solve(input) {

    let registers = {
      a: 0,
      b: 0
    }

    let instructions = input.instructions.split('\n')
                    .map((instruction) => instruction.trim().split(" "));

    for (let i = 0; i < instructions.length; i++) {
      let instruction = instructions[i];

        console.log(i);
      console.log(instruction);
      if (instruction[0] === 'inc') {
        registers[instruction[1]]++;
      }
      else if(instruction[0] === "hlf") {
          registers[instruction[1]] /= 2;
      }
      else if(instruction[0] === "tpl") {
          registers[instruction[1]] *= 3;
      }
      else if(instruction[0] === "jmp") {
          i += (parseInt(instruction[1]) - 1);=
      }
      else if(instruction[0] === "jio") {
        if (registers[instruction[1][0]] === 1) {
          i += (parseInt(instruction[2]) - 1);
        }
      }
      else if(instruction[0] === "jie") {
        if (registers[instruction[1][0]] % 2 === 0) {
          i += (parseInt(instruction[2]) - 1);
        }
      }
      console.log(registers);
    }
    return registers[input.register];
   }
}
