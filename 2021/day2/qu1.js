const txtToArray = require("../txt-to-array");

const data = txtToArray(__dirname + "/input.txt")

let x = 0;
let y = 0;

data.forEach((i) => {
    let instruction = i.split(" ")
    if ("forward" == instruction[0]) {
        x += 1*instruction[1]
    } else if ("up" == instruction[0]) {
        y -= 1* instruction[1]
    } else if ("down" == instruction[0]) {
        y += 1* instruction[1]
    }
})

console.log(x*y)