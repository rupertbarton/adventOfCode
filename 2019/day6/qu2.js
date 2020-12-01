const data = require('./input')

const solver = (data) => {
  let tracker = {
    COM: {
      value: 0,
      orbitedBy: [],
      orbits: null
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

    if (tracker[orbiter]) {
      tracker[orbiter].orbits = centerOfOrbit
    } else {
      tracker[orbiter] = {
        orbits: centerOfOrbit
      }
    }

    if (tracker[centerOfOrbit] && (tracker[centerOfOrbit].value || tracker[centerOfOrbit].value === 0)) {
      const newValue = tracker[centerOfOrbit].value + 1

      if (tracker[orbiter]) {
        tracker[orbiter].value = tracker[centerOfOrbit].value + 1
      } else {
        tracker[orbiter] = {
          value: tracker[centerOfOrbit].value + 1
        }
      }

      recursiveUpdateChildren(orbiter)
    }
  })

  let counter = 0
  let santaLocation = 'SAN'
  let currentLocation = 'YOU'


  while (santaLocation !== currentLocation) {
    if (tracker[santaLocation].value >= tracker[currentLocation].value) {
      santaLocation = tracker[santaLocation].orbits
      counter += 1
    } 
    if (tracker[santaLocation].value <= tracker[currentLocation].value) {
      currentLocation = tracker[currentLocation].orbits
      counter += 1
    }
    }

return counter -2
}

test1 = [
  'COM)B',
'B)C',
'C)D',
'D)E',
'E)F',
'B)G',
'G)H',
'D)I',
'E)J',
'J)K',
'K)L',
'K)YOU',
'I)SAN',
]

console.time()
console.log(solver(data))
console.timeEnd()