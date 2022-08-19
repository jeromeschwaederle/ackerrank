const [n, m, s] = "134 644278309 113".split(" ").map(n => +n);

function saveThePrisoner(n, m, s) {
  const nbCandyRemainder = m % n;
  const shiftFromStart = s - 1;
  const shiftAndRemainderCandy = shiftFromStart + nbCandyRemainder;

  if (shiftAndRemainderCandy % n === 0) return n;
  if (shiftAndRemainderCandy > n) return shiftAndRemainderCandy % n;
  if (shiftAndRemainderCandy < n) return shiftAndRemainderCandy;
}

console.log(saveThePrisoner(n, m, s));
