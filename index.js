// Returns a function that then calculates whether a given trip is within range.
// For example, produceDrivingRange(10) returns a function that will return false
// if the trip is over 10 blocks distance and true if the distance is within range.
// So produceDrivingRange returns a function that we can then use to calculate
// if a trip is too large for a driver.
// We recommend referencing the test/indexTest.js for more details.
function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){

    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let distanceToTravel = Math.abs(end - start);
    let dif = blockRange - distanceToTravel;

    if( dif > 0){
      return `within range by ${dif}`}
    else {
      return `${Math.abs(dif)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(rideFare){
    return rideFare*percentage;
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.id = ++driverId
      this.name = name
    }
  }
}
