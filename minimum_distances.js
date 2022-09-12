const a = [1, 1];

function minimumDistances(a) {
  let minDist = Infinity;
  for (let i = 0; i <= a.length - 2; i++) {
    const other = a.indexOf(a[i], i + 1);
    if (other >= 0) if (other - i < minDist) minDist = other - i;
  }
  return minDist === Infinity ? -1 : minDist;
}

console.log(minimumDistances(a));
