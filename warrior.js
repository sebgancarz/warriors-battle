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

module.exports = { Warrior };
