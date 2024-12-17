const txtToArray = require("../txt-to-array");

const data = txtToArray(__dirname + "/input.txt")

let sums = []

data.forEach((line) => {
    for (let i = 0; i < line.length; i++) {
        if( !sums[i]) {
            sums[i] = 0
        }

        sums[i] += 1*line.charAt(i)
    }
})

let gamma = sums.map(count => count > data.length / 2 ? 1 : 0)
let epsilon = sums.map(count => count < data.length / 2 ? 1 : 0)

const binaryListToDecimal = (list) => {
    let currentPowerOf2 = 1
    let result = 0
    for (let i = list.length - 1; i >= 0; i--) {
        result += list[i] * currentPowerOf2
        currentPowerOf2 *= 2
    }
    return result
}

console.log(binaryListToDecimal(epsilon) * binaryListToDecimal(gamma))