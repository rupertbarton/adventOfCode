const txtToArray = require("../txt-to-array");

const data = txtToArray(__dirname + "/input.txt")

let count = 0

data.forEach((_, i) => {
    if (i > 2 && data[i -3]*1 < data[i]*1)  {
        count++
    }
})

console.log(count)