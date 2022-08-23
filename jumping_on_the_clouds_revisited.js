// const c = "1 1 1 0 1 1 0 0 0 0".split(" ").map(n => +n);
const c = "1 1 0 1 0 1 0 1 0 1 0 1 1 0 1 1 1 1 1".split(" ").map(n => +n);
const k = 19;

function jumpingOnClouds(c, k) {
  let e = 100;
  let i = k;
  while (i % c.length !== 0) {
    if (c[i] === 1) e -= 3;
    else e--;
    i = (i + k) % c.length;
  }
  e -= c[0] === 1 ? 3 : 1;
  return e;
}

console.log(jumpingOnClouds(c, k));
