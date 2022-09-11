const n = 8;
const width = [2, 3, 1, 2, 3, 2, 3, 3];
const cases = [
  [0, 3],
  [4, 6],
  [6, 7],
  [3, 5],
  [0, 7],
];

const serviceLane = (n, width, cases) => cases.map(c => Math.min(...width.slice(c[0], c[1] + 1)));

console.log(serviceLane(n, width, cases));
