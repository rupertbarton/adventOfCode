const input = require("./input.json");

const testArray = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

const findValidPasswords = (input) => {
  let validCount = 0;

  input.map((line) => {
    let [min, max, letter, password] = line.split(/[: | |-]+/);
    let letterCount = 0;
    for (let i = 0; i < password.length; i++) {
      if (password.charAt(i) === letter) letterCount++;
    }
    if (min <= letterCount && letterCount <= max) validCount++;
  });

  return validCount;
};

console.log(findValidPasswords(testArray));
