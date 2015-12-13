export class Solution {

  public solve(input) {
    var instructions = input.split('\n');

    var people = [];

    for (var i = 0; i < instructions.length; i++) {
      var instructionParts = instructions[i].split(' ');

      var personName = instructionParts[0];

      var person = people.filter((person) => person.name === personName)[0];

      if (!person) {
        person = new Person();
        person.name = personName;
        people.push(person);
      }

      var comparatorPersonName = instructionParts[instructionParts.length - 1].replace('.', '');

      var comparatorPerson = people.filter((person) => person.name === comparatorPersonName)[0];

      if (!comparatorPerson) {
        comparatorPerson = new Person();
        comparatorPerson.name = comparatorPersonName;
        people.push(person);
      }

      var happinessValue = instructionParts[3];

      if (instructionParts[2] === 'lose') {
        happinessValue *= -1;
      }

      person.seatingPreferences.push({
        person: comparatorPerson,
        happinessChange: happinessValue
      })
    }

    var scores = [];



    for (var i = 0; i < people[0].seatingPreferences.length; i++) {
      scores.push(people[0].seatingPreferences[i].happinessChange)
    }

    return Math.max.apply(Math, scores);
  }
}

class Person {
  public name: string;

  public seatingPreferences: any[];

  public constructor() {
    this.seatingPreferences = [];
  }
}
