const lowerBound = 156218
const upperBound = 652527

const solver = (low, high) => {
  let counter = 0
  for (i = low; i <= high; i++) {
    let value = i.toString()
    let hasDouble = false
    for (j = 1; j < value.length; j++) {
      if (value.charAt(j) < value.charAt(j - 1)) {
        break
      }
      if (value.charAt(j) == value.charAt(j-1)) {
        hasDouble = true
      }
      if (j == 5 && hasDouble) {
        counter ++
      }
    }
  }

  return counter
}

console.log(solver(lowerBound, upperBound))