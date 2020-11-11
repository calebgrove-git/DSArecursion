//calc nth triangular number

var triNumber = function (n) {
  if (n == 0) {
    return n;
  }
  return n + triNumber(n - 1);
};
console.log(triNumber(6));
