const utils = require("../utils");

const input = utils.getRawInput().split(",").map(Number);

const days = 256;
let fishes = Array(9).fill(0);

input.forEach(fish => {
  fishes[fish]++;
});

for (let i = 0; i < days; i++) {
  newFishesCount = fishes[0];
  for (let j = 0; j < fishes.length; j++) {
    fishes[j] = fishes[j + 1];
  }
  fishes[8] = newFishesCount;
  fishes[6] += newFishesCount;
}

console.log(fishes.reduce((a, b) => a + b));
