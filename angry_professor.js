const k = 3;
const a = [-1, -3, 4, 2];

const angryProfessor = (k, a) =>
  a.reduce((acc, curV) => {
    if (curV <= 0) acc++;
    return acc;
  }, 0) < k
    ? "YES"
    : "NO";

console.log(angryProfessor(k, a));
