/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject{
    constructor(gameProps){
        this.createdAt = gameProps.createdAt;
        this.name = gameProps.name;
        this.dimensions = gameProps.dimensions;
    }

    destroy(){
        return `${this.name} was removed from the game`
    }

}

class CharacterStats extends GameObject{
    constructor(charProps){
        super(charProps)
        this.healthPoints = charProps.healthPoints;
    }

    takeDamage(){
        return `${this.name} took damage`
      }
}

class Humanoid extends CharacterStats{
    constructor(humProps){
        super(humProps)
        this.team = humProps.team;
        this.weapons = humProps.weapons;
        this.language = humProps.language;
    }

    greet(){
        return `${this.name} offers a greeting in ${this.language}.`
    }
}

// The 'Villian' class has a method 'vilAttack' that increases the damage when attacking an opponent (from 0-10 extra damage) but imposes a 5 healthpoint penalty when used.

class Villian extends Humanoid {
    constructor(vilProps){
        super(vilProps)
        this.attackStrength = vilProps.attackStrength;
    }

    vilAttack(opponent){
        let damageAmount = this.attackStrength + (Math.floor(Math.random() * 10))
        if(opponent.healthPoints > 0){
          opponent.healthPoints = opponent.healthPoints - damageAmount;
          if(opponent.healthPoints > 0){
            console.log(`${opponent.name} has been attacked. ${opponent.name} has ${opponent.healthPoints} health points left.`);
          } else {
            console.log(`${opponent.name} is dead. Stop hitting a corpse.`)
          }
        } else {
          console.log(`${opponent.name} is dead. Stop hitting a corpse.`)
        }
        this.healthPoints -= 5;
        console.log(`That attack cost health points. ${this.name} has ${this.healthPoints} health points left.`)
        
      }
}

// The 'Hero' class has a 'heal' method that adds additional healthpoints
// The 'Hero' class has an 'attack' method that reduces the opponent's healthpoints by the number of the hero's attackstrength property 

class Hero extends Humanoid {
    constructor(heroProps){
        super(heroProps)
        this.attackStrength = heroProps.attackStrength;
    }

    attack(opponent){
        if(opponent.healthPoints > 0){
          opponent.healthPoints = opponent.healthPoints - this.attackStrength;
          if(opponent.healthPoints > 0){
            console.log(`${opponent.name} has been attacked. ${opponent.name} has ${opponent.healthPoints} health points left.`);
          } else {
            console.log(`${opponent.name} is dead. Stop hitting a corpse.`)
          }
        } else {
          console.log(`${opponent.name} is dead. Stop hitting a corpse.`)
        }
    }

    heal(){
        let healAmount = this.attackStrength + 5 + (Math.floor(Math.random() * 10));
        if(this.healthPoints >= 100){
          console.log(`${this.name}'s health is already full.`)
        } else if ((this.healthPoints + healAmount) > 100){
          this.healthPoints = 100;
          console.log(`${this.name} cast a healing spell. ${this.name} has ${this.healthPoints} health points left`)
        } else {
          this.healthPoints += healAmount;
          console.log(`${this.name} cast a healing spell. ${this.name} has ${this.healthPoints} health points left`)
        }
      }
}

const link = new Hero({
    createdAt: new Date(),
    name: 'Link',
    dimensions: {
        length: 5,
        width: 5,
        height: 5,
    },
    healthPoints: 100,
    team: 'Blue Mountain Clan',
    weapons: 'battle axe',
    language: 'Sindarin',
    attackStrength: 10,
})

const blink = new Villian({
    createdAt: new Date(),
    name: 'Blink',
    dimensions: {
        length: 6,
        width: 6,
        height: 3,
    },
    healthPoints: 100,
    team: 'Blue Mountain Clan',
    weapons: 'battle axe',
    language: 'Silvan',
    attackStrength: 10,
})





blink.vilAttack(link);
blink.vilAttack(link);
blink.vilAttack(link);
blink.vilAttack(link);

link.heal();

// Original Tests

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.