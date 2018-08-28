function createDriver(){
  let DriverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++DriverId
    }
  }
}

function produceDrivingRange(blockRange){
  return function(a, b) {
    let pickup = parseInt(a);
    let dropoff = parseInt(b);
    let rideTotal = Math.abs(dropoff - pickup);
    if (rideTotal > blockRange) {
      return `${Math.abs(blockRange - rideTotal)} blocks out of range`
    }else {
      return `within range by ${Math.abs(rideTotal - blockRange)}`
    }
  }
}

function produceTipCalculator(tipMultiplier) {
  return function(tipAmount) {
    return tipMultiplier * tipAmount
  }
}
