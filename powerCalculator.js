//powerCalculator(10,2) should return 100
//powerCalculator(10,-2) should return exponent should be >= 0

var powerCalc = function (a, n) {
  if (n === 0) {
    return 1;
  } else {
    return a * powerCalc(a, n - 1);
  }
};
console.log(powerCalc(10, 2));
