function produceDrivingRange(blockRange) {
  return function (start, end) {
    let startBlock = start.slice(0, 2);
    let endBlock = end.slice(0, 2);
    let distance = endBlock - startBlock;
    let difference = blockRange - distance;
    if(difference > 0){
     return `within range by ${difference}`
   } else {
     return `${Math.abs(difference)} blocks out of range`
   }
 }
}



function produceTipCalculator(tip) {
  return function(fare) {
    return tip * fare
  }
}
