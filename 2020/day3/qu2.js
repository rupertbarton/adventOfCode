const input = require("./input.json");

const countEncounteredTrees = (input) => {
  let treeCount = [];
  let width = input[0].length;

  const dx = [1, 3, 5, 7, 1];
  const dy = [1, 1, 1, 1, 2];

  for (let i = 0; i < dx.length; i++) {
    let y = 0;
    let x = 0;
    let current = 0;
    while (y < input.length) {
      if (input[y].charAt(x % width) === "#") {
        current++;
      }
      y += dy[i];
      x += dx[i];
      console.log(current);
    }

    treeCount.push(current);
  }

  return treeCount.reduce((acc, current) => acc*current);
};

console.log(countEncounteredTrees(input));
