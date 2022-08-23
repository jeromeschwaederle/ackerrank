const t = 4;

function strangeCounter(t) {
  let initial = 3;
  let time = 0;
  while (time < t) {
    time += initial;
    initial *= 2;
  }
  return time - t + 1;
}

console.log(strangeCounter(t));
