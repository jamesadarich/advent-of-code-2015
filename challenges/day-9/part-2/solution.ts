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


      var comparatorPersonName = instructionParts[2];

      var comparatorPerson = people.filter((p) => p.name === comparatorPersonName)[0];

      if (!comparatorPerson) {
        comparatorPerson = new Person();
        comparatorPerson.name = comparatorPersonName;
        people.push(comparatorPerson);
      }

      var happinessValue = parseInt(instructionParts[4]);

      person.seatingPreferences.push({
        person: comparatorPerson,
        happinessChange: happinessValue
     });

     comparatorPerson.seatingPreferences.push({
      person: person,
      happinessChange: happinessValue
    });
    }

    var scores = [];
    for (var i = 0; i < people.length; i++) {

      scores = scores.concat(this._findAllScores(people[i], [people[i]], [], 0));
   }

    console.log(scores);

    return Math.max.apply(Math, scores);
  }

  private _findAllScores(currentPerson: Person, visited: Person[], scores: any[], score: number) {
     console.log(score);
     if (visited.length === currentPerson.seatingPreferences.length + 1) {
        //var other = currentPerson.seatingPreferences.filter((p) => p.person.name === visited[0].name)[0];
         // var otherAgain = visited[0].seatingPreferences.filter((p) => p.person.name === currentPerson.name)[0];

        var travel = '';
        for (var i = 0; i < visited.length; i++) {
           travel += visited[i].name + ' -> ';
        }

        console.log(travel, score /*+ other.happinessChange + otherAgain.happinessChange*/);
        scores.push(score /*+ other.happinessChange + otherAgain.happinessChange*/);
        return scores;
     }

     currentPerson.seatingPreferences.forEach((preference) => {
        if (visited.indexOf(preference.person) === -1) {
          //var other = preference.person.seatingPreferences.filter((p) => p.person.name === currentPerson.name)[0];
           scores = this._findAllScores(preference.person, visited.concat([preference.person]), scores, (score /*+ other.happinessChange */+  preference.happinessChange));
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
