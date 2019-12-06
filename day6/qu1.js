const data = require('./input')
const fp = require('lodash/fp')

const solver = (data) => {
  let counter = 0
  let tracker = {
    COM: {
      value: 0,
      orbitedBy: []
    }
  }

  const recursiveUpdateChildren = (updatedOrbitee) => {
    fp.getOr([], 'orbitedBy')(tracker[updatedOrbitee]).map(child => {
        const newValue = tracker[updatedOrbitee].value + 1
        tracker = fp.set(`[${child}].value`, newValue)(tracker)
        counter += newValue
        recursiveUpdateChildren(child)
      })
  }


  data.map((value) => {
    const [centerOfOrbit, orbiter] = value.split(')')
    const orbiterArray = fp.getOr([], 'orbitedBy' )(tracker[centerOfOrbit])
    tracker = fp.set(`[${centerOfOrbit}].orbitedBy`, [...orbiterArray, orbiter])(tracker)

    if (fp.getOr(-1, `[${centerOfOrbit}].value`)(tracker) >= 0) {
      const newValue = tracker[centerOfOrbit].value + 1

      tracker = fp.set(`[${orbiter}].value`, newValue)(tracker)

      counter += newValue
      recursiveUpdateChildren(orbiter)
    }
  })


  return counter
}

test1 = ['COM)B', 'B)C', 'C)D', 'D)E', 'E)F', 'B)G', 'G)H', 'D)I', 'E)J', 'J)K', 'K)L']

console.time()
console.log(solver(data))
console.timeEnd()