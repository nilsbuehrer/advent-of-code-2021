const utils = require("../utils");

const cmds = utils.getInput();

hor = 0;
dep = 0;
aim = 0;

cmds.forEach((c) => {
  [direction, distance] = c.split(" ");
  distance = Number(distance);
  switch (direction) {
    case "forward":
      hor += distance;
      dep += aim * distance;
      break;
    case "up":
      aim -= distance;
      break;
    case "down":
      aim += distance;
      break;
  }
});

console.log(dep * hor);
