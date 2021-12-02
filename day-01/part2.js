const utils = require('../utils');

const input = utils.getIntInput();

counter = 0;
prev = input[0] + input[1] + input[2];

for (let i = 0; i < input.length; i++) {
  n = input[i] + input[i + 1] + input[i + 2];
  if (prev < n) counter++;
  prev = n;
}

console.log(counter);
