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

      var comparatorPerson = people.filter((p) => p.name === comparatorPersonName)[0];

      if (!comparatorPerson) {
        comparatorPerson = new Person();
        comparatorPerson.name = comparatorPersonName;
        people.push(comparatorPerson);
      }

      var happinessValue = parseInt(instructionParts[3]);

      if (instructionParts[2] === 'lose') {
        happinessValue *= -1;
      }
          console.log(happinessValue);

      person.seatingPreferences.push({
        person: comparatorPerson,
        happinessChange: happinessValue
     });
    }


     var me = new Person();
     me.name = 'James';

    for (var i = 0; i < people.length; i++) {
      people[i].seatingPreferences.push({
        person: me,
        happinessChange: 0
     });
     me.seatingPreferences.push({
      person: people[i],
      happinessChange: 0
    });
   }

   console.log(people);

    var scores = this._findAllScores(people[0], [people[0]], [], 0);

    console.log(scores);

    return Math.max.apply(Math, scores);
  }

  private _findAllScores(currentPerson: Person, visited: Person[], scores: any[], score: number) {
     console.log(score);
     if (visited.length === currentPerson.seatingPreferences.length + 1) {
        var other = currentPerson.seatingPreferences.filter((p) => p.person.name === visited[0].name)[0];
          var otherAgain = visited[0].seatingPreferences.filter((p) => p.person.name === currentPerson.name)[0];

        var travel = '';
        for (var i = 0; i < visited.length; i++) {
           travel += visited[i].name + ' -> ';
        }

        console.log(travel, score + other.happinessChange + otherAgain.happinessChange);
        scores.push(score + other.happinessChange + otherAgain.happinessChange);
        return scores;
     }

     currentPerson.seatingPreferences.forEach((preference) => {
        if (visited.indexOf(preference.person) === -1) {
          var other = preference.person.seatingPreferences.filter((p) => p.person.name === currentPerson.name)[0];
           scores = this._findAllScores(preference.person, visited.concat([preference.person]), scores, (score + other.happinessChange +  preference.happinessChange));
        }
     });

     return scores;
 }
}

class Person {
  public name: string;

  public seatingPreferences: any[];

  public constructor() {
    this.seatingPreferences = [];
  }
}
