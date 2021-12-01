const txtToArray = require("../txt-to-array");

const data = txtToArray(__dirname + "/input.txt")

let lastHeight;
let count = 0

data.forEach((i) => {
    i = i*1
    if (lastHeight && lastHeight < i)  {
        count++
    }
    lastHeight = i
})

console.log(count)