const utils = require("../utils");

const input = utils.getRawInput().split(",").map(Number);

const days = 80;
let fishes = input;

for (let i = 0; i < days; i++) {
  for (let j = 0; j < fishes.length; j++) {
    if (fishes[j] === 0) {
      fishes[j] = 6;
      fishes.push(9);
    } else {
      fishes[j]--;
    }
  }
}

console.log(fishes.length);
