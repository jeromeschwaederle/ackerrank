const s = "hereiamstackerrank";
// const s = "hackerworld";

function hackerrankInString(s) {
  const model = "hackerrank";
  let indexInModel = 0;
  [...s].map(char => {
    if (char === model[indexInModel]) {
      indexInModel++;
    }
  });
  return indexInModel >= model.length ? "YES" : "NO";
}

console.log(hackerrankInString(s));
