const utils = require('../utils');

const input = utils.getIntInput();

let incCount = 0;
for (let i = 1; i < input.length; i++) {
  if (input[i - 1] < input[i]) incCount++;
}

console.log(incCount);
