// Count a pretty range and intervals
const getPowerOfTen = (number) => {
    if (!number || number === 0 /* || Number.isNan(number) */) { return 0; };
    let multiplier = .1;
    number = Math.abs(number);
    while (number / multiplier < 1 || number / multiplier >= 10) {
        multiplier = multiplier * 10;
    }
    console.log("getPowerTen function did a run!");
    return multiplier;
  }
  
  const getDividingNumber = (number) => {
    let dividingNumber = 3;
    let division = number / dividingNumber;
    while (division !== Math.floor(division)) {
        dividingNumber++;
        division = number / dividingNumber;
    }
    console.log("getDividingNumber function did a run!");
    return dividingNumber; 
  }
  
  const getIntervalValues = (values) => {
    // Get smallest and highest numbers in values
    let min = Math.min(...values);
    let max = Math.max(...values);
    console.log("Highest value" + max);
    // Check which one has bigger power of ten
    let powerOfTen;
    if (getPowerOfTen(max) >= getPowerOfTen(min)) {
        powerOfTen = getPowerOfTen(max);
    } else {
        powerOfTen = getPowerOfTen(min);
    }
    // Round smallest and highest numbers into root numbers between 0-100
    min = Math.floor(min / powerOfTen) * 10;
    max = Math.ceil(max / powerOfTen) * 10;
    // Count range and make pretty
    const range = max - min;
    const amountOfSteps = getDividingNumber(range);
    const steps = [];
    for (let j = 0; j < amountOfSteps + 1; j++) {
        steps.push(((range / amountOfSteps) * j + min) * powerOfTen / 10);
    }
    console.log("getIntervals function did a run!");
    return steps;
  }