const utils = require('../utils');

const input = utils.getIntInput();

let incCount = 0;
for (let i = 0; i < input.length - 3; i++) {
  const sum1 = input[i] + input[i + 1] + input[i + 2];
  const sum2 = input[i + 1] + input[i + 2] + input[i + 3];
  if (sum1 < sum2) incCount++;
}

console.log(incCount);
