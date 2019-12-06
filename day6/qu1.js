const data = require('./input')

const solver = (data) => {
  let counter = 0
  let tracker = {
    COM: {
      value: 0,
      orbitedBy: []
    }
  }

  const recursiveUpdateChildren = (updatedOrbitee) => {
    if (tracker[updatedOrbitee].orbitedBy) {
      tracker[updatedOrbitee].orbitedBy.map(childBody => {
        const newValue = tracker[updatedOrbitee].value + 1
        if (tracker[childBody]) {
          tracker[childBody].value = newValue
        } else {
          tracker[childBody] = {
            value: newValue
          }
        }
        counter += newValue
        recursiveUpdateChildren(childBody)
      })
    }
  }


  data.map((value) => {
    const [centerOfOrbit, orbiter] = value.split(')')
    if (tracker[centerOfOrbit] && tracker[centerOfOrbit].orbitedBy) {
      tracker[centerOfOrbit].orbitedBy.push(orbiter)
    } else if (tracker[centerOfOrbit]) {
      tracker[centerOfOrbit].orbitedBy = [orbiter]
    } else {
      tracker[centerOfOrbit] = {
        orbitedBy: [orbiter]
      }
    }

    if (tracker[centerOfOrbit] && (tracker[centerOfOrbit].value || tracker[centerOfOrbit].value === 0) ) {
      const newValue = tracker[centerOfOrbit].value + 1
      if (tracker[orbiter]) {
        tracker[orbiter].value = tracker[centerOfOrbit].value + 1
      } else {
        tracker[orbiter] = {
          value: tracker[centerOfOrbit].value + 1
        }
      }
      counter += newValue
      recursiveUpdateChildren(orbiter)
    }
  })


  return counter
}

test1 = ['COM)B', 'B)C', 'C)D', 'D)E', 'E)F', 'B)G', 'G)H', 'D)I', 'E)J', 'J)K', 'K)L']

console.time()
console.log(solver(test1))
console.timeEnd()