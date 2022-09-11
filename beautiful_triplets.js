const d = 3;
const arr = [1, 6, 7, 7, 8, 10, 12, 13, 14, 19];

const beautifulTriplets = (d, arr) =>
  arr.reduce(
    (acc, curV) =>
      arr.some(n => n === curV + d) && arr.some(n => n === curV + d * 2) ? acc + 1 : acc,
    0
  );

console.log(beautifulTriplets(d, arr));
