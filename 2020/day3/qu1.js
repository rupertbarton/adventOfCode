const input = require("./input.json");

const countEncounteredTrees = (input) => {
  let y = 0;
  let x = 0;
  let treeCount = 0;
  let width = input[0].length;

  while (y < input.length) {
    if (input[y].charAt(x % width) === "#") {
      treeCount++;
    }
    y++;
    x += 3;
  }

  return treeCount;
};

console.log(countEncounteredTrees(input));
