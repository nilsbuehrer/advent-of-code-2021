const utils = require("../utils");

const input = utils.getInput();

let gamma = "";
let epsilon = "";

for (let i = 0; i < input[0].length; i++) {
  const onesCount = input.map((x) => x[i]).filter((x) => x == "1").length;
  if (onesCount > input.length / 2) {
    gamma += "1";
    epsilon += "0";
  } else {
    gamma += "0";
    epsilon += "1";
  }
}

console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
