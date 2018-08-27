const produceDrivingRange = function (blockRange) {
  return function (streetOne, streetTwo) {
    let street1 = streetOne.slice(0, 2)
    let street2 = streetTwo.slice(0, 2)
    let distance = street2 - street1
    let difference = Math.abs(blockRange - distance)
    if (distance > blockRange) {
      return `${difference} blocks out of range`
    } else {
      return `within range by ${difference}`
    }
  }
}

const produceTipCalculator = function (percent) {
  return function (fare) {
    return fare * percent
  }
}

function createDriver() {
  let driverId = 0
    return class {
      constructor(name) {
        this.name = name
        this.id = ++driverId
      }
    }
}
