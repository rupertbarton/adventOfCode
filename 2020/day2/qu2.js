const input = require("./input.json");

const testArray = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

const findValidPasswords = (input) => {
  let validCount = 0;

  input.map((line) => {
    let [pos1, pos2, letter, password] = line.split(/[: | |-]+/);
    const validCharAtPos = pos => password.charAt(pos-1) === letter
    if (validCharAtPos(pos1) ^ validCharAtPos(pos2)) validCount++;
  });

  return validCount;
};

console.log(findValidPasswords(input));
