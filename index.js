const { Warrior } = require('./warrior');
const { Arena } = require('./arena');
const { random } = require('./utils');

const arena = new Arena(
  new Warrior('Baba Yaga', random(5, 9), random(90, 120)),
  new Warrior('Yanosik', random(4, 8), random(100, 130)),
);

let winner;
do {
  winner = arena.fight();
} while (winner === null);

winner.levelUp();
console.log(winner.getName(), 'is a winner!');
