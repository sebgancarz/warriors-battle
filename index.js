class Warrior {
  // private fields / properties
  #name;
  #attack;
  #hp;
  constructor(name, attack, hp) {
    this.#name = name;
    this.#attack = attack;
    this.#hp = hp;
  }
  setHp(hp) {
    this.#hp = hp;
  }
  getHp() {
    return this.#hp;
  }
  getAttack() {
    return this.#attack;
  }
  getName() {
    return this.#name;
  }
  levelUp() {
    this.#attack *= 1.1;
    this.#hp *= 1.1;
  }
}

class Arena {
  constructor(warrior1, warrior2) {
    if (!(warrior1 instanceof Warrior)) {
      throw new Error('warrior1 must be a instance of Warrior class!');
    }

    if (!(warrior2 instanceof Warrior)) {
      throw new Error('warrior2 must be a instance of Warrior class!');
    }

    this.warrior1 = warrior1;
    this.warrior2 = warrior2;
    this.activeWarrior = 1;
  }
  fight() {
    const attacker = this.activeWarrior === 1 ? this.warrior1 : this.warrior2;
    const attacked = this.activeWarrior === 1 ? this.warrior2 : this.warrior1;

    const attackingHitPoints = attacker.getAttack();
    const attackedOldHealthPoints = attacked.getHp();
    const attackedNewHealthPoints = attackedOldHealthPoints - attackingHitPoints;

    console.log(`${attacker.getName()} is attacking ${attacked.getName()} and now he has ${attackedNewHealthPoints} hp`);

    attacked.setHp(attackedNewHealthPoints);

    this.activeWarrior = this.activeWarrior === 1 ? 2 : 1;

    if (attackedNewHealthPoints <= 0) {
      console.log(`${attacked.getName()} goes to Valhalla.`);
      return attacker;
    }
    return null;
  }
}

const fighter1 = new Warrior('Baba Yaga', 9, 120);
const fighter2 = new Warrior('Yanosik', 7, 140);

const arena = new Arena(fighter1, fighter2);

let winner;
do {
  winner = arena.fight();
} while (winner === null);

winner.levelUp();
console.log(winner.getName(), 'is a winner!');
