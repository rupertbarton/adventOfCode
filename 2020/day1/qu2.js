const input = require("./input.json");

const fixExpenses = (expenses) => {
  for (let i = 0; i < expenses.length - 2; i++) {
    for (let j = i + 1; j < expenses.length - 1; j++) {
        for (let k = j + 1; k < expenses.length; k++) {
        if (expenses[i] + expenses[j] + expenses[k] === 2020) {
          return expenses[i] * expenses[j] * expenses[k];
        }
      }
    }
  }
};

console.log(fixExpenses(input));
