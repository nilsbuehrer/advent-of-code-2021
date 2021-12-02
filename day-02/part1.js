const utils = require('../utils');

const cmds = utils.getInput();

hor = 0;
dep = 0;

cmds.forEach((c) => {
  [direction, distance] = c.split(" ");
  distance = Number(distance);
  switch (direction) {
    case "forward":
      hor += distance;
      break;
    case "up":
      dep -= distance;
      break;
    case "down":
      dep += distance;
      break;
  }
});

console.log(dep*hor);
