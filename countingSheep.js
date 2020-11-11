// input 3
// output
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

var countSheep = function (int) {
  if (int === 0) {
    console.log(`All sheep jumped over the fence.`);
    return;
  }
  console.log(`${int}: Another sheep jumps over the fence.`);

  return countSheep(int - 1);
};
countSheep(3);
