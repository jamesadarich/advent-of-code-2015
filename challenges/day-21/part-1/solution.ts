export class Solution {

  public solve(input) {
    let warrior = new Warrior();

    let weapons = [
      new Weapon(4, 0, 8),
      new Weapon(5, 0, 10),
      new Weapon(6, 0, 25),
      new Weapon(7, 0, 40),
      new Weapon(8, 0, 74)
    ]

    let armor = [
      new Armor(0, 1, 13),
      new Armor(0, 2, 31),
      new Armor(0, 3, 53),
      new Armor(0, 4, 75),
      new Armor(0, 5, 102)
    ]

    let rings = [
      new Ring(1, 0, 25),
      new Ring(2, 0, 50),
      new Ring(3, 0, 100),
      new Ring(0, 1, 20),
      new Ring(0, 2, 40),
      new Ring(0, 3, 80)
    ]

    let winningCosts = [];

    for (let i = 0; i < weapons.length; i++) {
      warrior.leftRing = null;
      warrior.rightRing = null;
      warrior.armor = null;

      warrior.weapon = weapons[i];

      if (warrior.fight(input)) {
        winningCosts.push(warrior.getTotalCost());
      }

      for (let j = 0; j < armor.length; j++) {
        warrior.armor = armor[j];


        if (warrior.fight(input)) {
          winningCosts.push(warrior.getTotalCost());
        }

        for (var k =0; k < rings.length; k++) {

            warrior.leftRing = rings[k];


            if (warrior.fight(input)) {
              winningCosts.push(warrior.getTotalCost());
            }
            for (var l = k + 1; l < rings.length; l++) {

                warrior.rightRing = rings[l];


                if (warrior.fight(input)) {
                  winningCosts.push(warrior.getTotalCost());
                }
            }
        }
      }

    }
    //return winningCosts;
    return Math.min.apply(Math, winningCosts);
   }
}

class Warrior {
  public weapon: Weapon;
  public armor: Armor;
  public leftRing: Ring;
  public rightRing: Ring;

  public getTotalCost(): number {
    let cost = this.weapon.cost;

    if (this.armor) {
      cost += this.armor.cost;
    }

    if (this.leftRing) {
      cost += this.leftRing.cost;
    }

    if (this.rightRing) {
      cost += this.rightRing.cost;
    }

    return cost;
  }

  public fight(boss) {
    let attack = this.weapon.attackBuff;

    if (this.leftRing) {
      attack += this.leftRing.attackBuff;
    }

    if (this.rightRing) {
      attack += this.rightRing.attackBuff;
    }

    let netAttack = attack - boss.defence;

    if (netAttack < 1) {
      netAttack = 1;
    }

    let turnsToDefeatBoss = Math.ceil(boss.hitPoints / netAttack);

    let defence = 0;

    if (this.armor) {
      defence += this.armor.defenceBuff;
    }

    if (this.leftRing) {
      defence += this.leftRing.defenceBuff;
    }

    if (this.rightRing) {
      defence += this.rightRing.defenceBuff;
    }

    let netBossAttack = boss.attack - defence;

    if (netBossAttack < 1) {
      netBossAttack = 1;
    }

    let turnsToBeDefeated = Math.ceil(100 / netBossAttack);
    if (this.getTotalCost() > 116 && this.getTotalCost() < 133) {
      console.log("total cost", this.getTotalCost());
      console.log("warrior attack", attack, "warrior defence", defence, "win in", turnsToDefeatBoss);
      console.log("boss attack", boss.attack, "boss defence", boss.defence, "win in", turnsToBeDefeated);
    }
    return turnsToDefeatBoss <= turnsToBeDefeated;
  }
}

class Item {
  public defenceBuff: number;
  public attackBuff: number;
  public cost: number;

  public constructor(attack, defence, cost) {
    this.attackBuff = attack;
    this.defenceBuff = defence;
    this.cost = cost;
  }
}

class Ring extends Item {}
class Armor extends Item {}
class Weapon extends Item {}
