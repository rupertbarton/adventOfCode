const txtToArray = require("../txt-to-array");

const data = txtToArray(__dirname + "/input.txt")

let OTwo = data
let COTwo = data

for (let i = 0; i < OTwo[0].length; i++) {
    let sum = 0
    OTwo.forEach((line,j) => {
        let previousSum = sum
        sum += 1*line[i]
    })

    mostCommon = sum >= OTwo.length / 2 ? "1" : "0"

    OTwo = OTwo.filter(value => {
       return value[i] === mostCommon
    })
    if (OTwo.length === 1) {
        break
    }
}

for (let i = 0; i < COTwo[0].length; i++) {
    let sum = 0
    COTwo.forEach(line => {
        sum += 1*line[i]
    })

    leastCommon = sum > COTwo.length / 2 ? "0" : "1"

    COTwo = COTwo.filter(value => {
       return value[i] === mostCommon
    })
    if (COTwo.length === 1) {
        break
    }
}

const binaryListToDecimal = (list) => {
    let currentPowerOf2 = 1
    let result = 0
    for (let i = list.length - 1; i >= 0; i--) {
        result += list[i] * currentPowerOf2
        currentPowerOf2 *= 2
    }
    return result
}

console.log(binaryListToDecimal(OTwo[0]) * binaryListToDecimal(COTwo[0]))

