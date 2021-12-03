const utils = require("../utils");

const input = utils.getInput();

let oxygen = input;
let co2 = input;

for (let i = 0; i < input[0].length; i++) {
  const oxygenOnes = oxygen.filter((x) => x[i] == "1");
  const co2Ones = co2.filter((x) => x[i] == "1");

  if (oxygenOnes.length >= oxygen.length / 2) {
    oxygen = oxygenOnes;
  } else {
    oxygen = oxygen.filter((x) => x[i] == "0");
  }

  if (co2Ones.length >= co2.length / 2) {
    co2 = co2.filter((x) => x[i] == "0");
  } else {
    co2 = co2.length > 1 ? co2Ones : co2;
  }
}

console.log(parseInt(oxygen[0], 2) * parseInt(co2[0], 2));
