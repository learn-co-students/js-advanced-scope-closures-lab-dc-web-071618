function produceDrivingRange(range) {
    return function(start, end) {
        let startNum = Number.parseInt(start.slice(0,-2));
        let endNum = Number.parseInt(end.slice(0,-2));
        console.log(startNum);
        console.log(endNum);
        if (startNum + range < endNum) {
            return `${endNum-(startNum+range)} blocks out of range`
        }
        else {
            return `within range by ${Math.abs(endNum-(startNum+range))}`
        }
    }
}

function produceTipCalculator(tip) {
    return function(fare) {
        return tip * fare;
    }
}