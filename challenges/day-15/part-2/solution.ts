export class Solution {

   public solve(input) {
      var instructions = input.split('\n');

      var ingredients = [];

      for (var i = 0; i < instructions.length; i++) {
         var ingredient = new Ingredient();
         ingredient.name = instructions[i].split(' ')[0];
         ingredient.capacity = parseInt(instructions[i].split(' ')[2].replace(',', ''));
         ingredient.durability = parseInt(instructions[i].split(' ')[4].replace(',', ''));
         ingredient.flavor = parseInt(instructions[i].split(' ')[6].replace(',', ''));
         ingredient.texture = parseInt(instructions[i].split(' ')[8].replace(',', ''));
         ingredient.calories = parseInt(instructions[i].split(' ')[10].replace(',', ''));
         ingredients.push(ingredient);
      }


      var score = this._findTopScore(ingredients, [], 0);

      return score;
   }

   private _findTopScore(allIngredients: Ingredient[], visited: any[], topScore: number) {

      var remainingIngredients = allIngredients.filter((ingredient) => visited.map((visit) => visit.item).indexOf(ingredient) === -1);

      if (remainingIngredients.length === 0) {
         var score = 1;
         var capacity = 0;
         var durability = 0;
         var flavor = 0;
         var texture = 0;
         var calories = 0;
         for (var i = 0; i < visited.length; i++) {
            capacity += visited[i].item.capacity * visited[i].spoons;
            durability += visited[i].item.durability * visited[i].spoons;
            flavor += visited[i].item.flavor * visited[i].spoons;
            texture += visited[i].item.texture * visited[i].spoons;
            calories += visited[i].item.calories * visited[i].spoons;
         }

         if (capacity < 0) {
            capacity = 0;
         }

         if (durability < 0) {
            durability = 0;
         }

         if (flavor < 0) {
            flavor = 0;
         }

         if (texture < 0) {
            texture = 0;
         }

         var score = capacity * durability * flavor * texture;

         if (calories === 500 && score > topScore) {
            return score
         }

         return topScore;
      }
      else {

         var totalRemainingSpoons = 100;

         for (var i = 0; i < visited.length; i++) {
            totalRemainingSpoons -= visited[i].spoons;
         }

         if (allIngredients.length - visited.length === 1) {
            topScore = this._findTopScore(allIngredients, visited.concat({ item: remainingIngredients[0], spoons: totalRemainingSpoons }), topScore);
         }
         else {

            for (var i = 0; i <= totalRemainingSpoons; i++) {
               topScore = this._findTopScore(allIngredients, visited.concat({ item: remainingIngredients[0], spoons: i }), topScore);
            }
         }
      }

      return topScore;
  }
}

class Ingredient {
   public capacity: number;
   public durability: number;
   public flavor: number;
   public texture: number;
   public calories: number;
   public name: string;
}
