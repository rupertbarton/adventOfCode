const intCodeComputer = (array, input) => {
  let i = 0
  let returnValue = null
  let positionModes = ""
  let currentInputIndex = 0
  
const getValue = (parameter) => {
  return getInputValue(i + parameter + 1, array, positionModes[parameter])
}

  while (i < array.length) {
    const OpCode = Number(array[i].toString().slice(-2))
    positionModes = array[i].toString().slice(0, -2).split("").reverse().join("");
    if (OpCode === 1) {
      // array[array[i + 3]] = array[array[i + 1]] + array[array[i + 2]]
      array[array[i+3]] = getValue(0)  + getValue(1)
      i = i + 4
    } else if (OpCode === 2) {
      array[array[i+3]] = getValue(0) * getValue(1)
      i = i + 4
    } else if (OpCode === 3) {
      array[array[i + 1]] = input[0] !== undefined ? input[currentInputIndex] : input
      currentInputIndex++
      i = i + 2
    } else if (OpCode === 4) {
      returnValue = getValue(0)
      i = i + 2
    } else if (OpCode === 5) {
      i = getValue(0) ? getValue(1) - 3 : i
      i = i + 3
    } else if (OpCode === 6) {
      i = getValue(0) ? i : getValue(1) - 3
      i = i + 3
    } else if (OpCode === 7) {
      array[array[i + 3]] = getValue(0) < getValue(1) ? 1 : 0
      i = i + 4
    } else if (OpCode === 8) {
      array[array[i + 3]] = getValue(0) === getValue(1) ? 1 : 0
      i = i + 4
    } else if (OpCode === 99) {
      return returnValue || array[0]
    } else throw `Invalid Input! Index: ${i}, Value: ${[array[i]]}`
  }
}

const getInputValue = (index, array, mode) => {
  if (mode == 1) {
    return array[index]
  } else {
    return array[array[index]]
  }
}

module.exports = intCodeComputer