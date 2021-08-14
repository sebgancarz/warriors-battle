const { random } = require('./utils');
const { Warrior } = require('./warrior');

class Arena {
  #warrior1;
  #warrior2;
  constructor(warrior1, warrior2) {
    if (!(warrior1 instanceof Warrior)) {
      throw new Error('warrior1 must be a instance of Warrior class!');
    }

    if (!(warrior2 instanceof Warrior)) {
      throw new Error('warrior2 must be a instance of Warrior class!');
    }

    this.#warrior1 = warrior1;
    this.#warrior2 = warrior2;
    this.activeWarrior = random(1, 2);
  }
  fight() {
    const attacker = this.activeWarrior === 1 ? this.#warrior1 : this.#warrior2;
    const defender = this.activeWarrior === 1 ? this.#warrior2 : this.#warrior1;

    const attackingAttack = attacker.getAttack();
    const attackedOldHp = defender.getHp();
    const attackedNewHp = attackedOldHp - attackingAttack;

    console.log(`${attacker.getName()} is attacking ${defender.getName()} and now he has ${attackedNewHp} hp`);

    defender.setHp(attackedNewHp);

    this.activeWarrior = this.activeWarrior === 1 ? 2 : 1;

    if (attackedNewHp <= 0) {
      console.log(`${defender.getName()} goes to Valhalla.`);
      return attacker;
    }
    return null;
  }
}

module.exports = { Arena };
