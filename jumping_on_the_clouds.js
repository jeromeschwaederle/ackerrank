const c = [0, 0, 1, 0, 0, 1, 0];

function jumpingOnClouds(c) {
  let jumps = 0;
  for (let i = 0; i < c.length - 1; ) {
    const next = c[i + 1];
    const afterNext = c[i + 2];
    if (afterNext === 0) i += 2;
    else i += 1;
    jumps++;
  }
  return jumps;
}

console.log(jumpingOnClouds(c));
