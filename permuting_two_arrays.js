const twoArrays = (k, A, B) => {
  return B.sort((a, b) => b - a)
    .map((num, i) => num + A.sort((a, b) => a - b)[i])
    .every(num => num >= k)
    ? "YES"
    : "NO";
};
