const produceDrivingRange = function (trip) {
  return function (beg, end) {
    // const getNums = /[a-z]/;
    //
    // const begNum = Number(beg.split(getNums).join(''));
    // const endNum = Number(end.split(getNums).join(''));

    const begNum = parseInt(beg);
    const endNum = parseInt(end);

    const totalLength = Math.abs(begNum - endNum)

    if (totalLength <= trip) {
      return `within range by ${Math.abs(totalLength - trip)}`;
    } else {
      return `${totalLength - trip} blocks out of range`
    }
  }
}

const produceTipCalculator = function (tip) {
  return function (totalCost) {
    return tip * totalCost;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
