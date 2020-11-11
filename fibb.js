var fibb = function (num) {
  if (num < 2) {
    return num;
  }
  return fibb(num - 1) + fibb(num - 2);
};
console.log(fibb(7));
