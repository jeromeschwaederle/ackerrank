const p = "2 3 1".split(" ").map(n => +n);

const permutationEquation = p =>
  p.map((_, x) => p.findIndex(e => e === p.findIndex(e => e === x + 1) + 1) + 1);

console.log(permutationEquation(p));
