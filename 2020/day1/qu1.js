const input = require('./input.json')

const fixExpenses = expenses => {
    const differences = {}

    for (let i = 0; i < expenses.length; i++) {
        const current = expenses[i]
        if (differences[current]) {
            return differences[current] * current
        } else {
            differences[2020 - current] = current
        }
    }
}

const testArray = [1721,979,366,299,675,1456]

console.log(fixExpenses(input))