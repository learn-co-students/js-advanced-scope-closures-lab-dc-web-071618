function produceDrivingRange(blockRange) {
  return function(block1, block2) {
    start = block1.slice(0,2)
    finish = block2.slice(0,2)
    let distance = finish - start;
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - distance}`;
    }
  }
}

function produceTipCalculator(tipRate) {
  return function(fare) {
    return fare * tipRate;
  }
}

function createDriver(name) {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
