const a = [1, 2, 3];
const k = 2;
const queries = [0, 1, 2];

function circularArrayRotation(a, k, queries) {
  return queries.map(val => {
    if (k > a.length) k = k % a.length;
    if (val - k >= 0) return a[val - k];
    if (val - k < 0) return a.at(val - k);
  });
}

console.log(circularArrayRotation(a, k, queries));
