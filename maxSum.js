const arr = [-4, 5, 7, -6, 10, -15, 3, 12, -400, 16, -8, -3, -7, -3, 2, 5, 7, 6];
// const arr = [5, 7, 6, 10, 3];
// const arr = [-3, 2, -1, 4, -2];

const maxSum = arr => {
  let bestSum = 0;
  let currentSum = 0;
  for (let n of arr) {
    currentSum = Math.max(0, currentSum + n);
    bestSum = Math.max(bestSum, currentSum);
  }
  return bestSum;
};

// const maxSum = arr => {
//   const makeSum = arr => arr.reduce((preV, curV) => preV + curV);
//   let max = 0;
//   for (let subArrLength = 1; subArrLength <= arr.length; subArrLength++) {
//     for (let subArrStart = 0; subArrStart < arr.length - subArrLength; subArrStart++) {
//       const sum = makeSum(arr.slice(subArrStart, subArrStart + subArrLength + 1));
//       if (sum > max) {
//         max = sum;
//       }
//     }
//   }
//   return max;
// };

console.log(maxSum(arr));
