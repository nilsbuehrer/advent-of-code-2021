const utils = require("../utils");

const input = utils.getRawInput().split(",").map(Number);

const min = Math.min(...input);
const max = Math.max(...input);

const fuels = [];

for (let i = min; i < max; i++) {
  let fuelCount = 0;
  for (let j = 0; j < input.length; j++) {
    fuelCount += Math.abs(input[j] - i);
  }
  fuels.push(fuelCount);
}

const best = Math.min(...fuels);

console.log(best);
