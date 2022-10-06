const arr = [3, -7, 0];

function minimumAbsoluteDifference(arr) {
  let minDiff = Infinity;
  const myArr = [...arr].sort((a, b) => a - b);
  for (let i = 0; i < myArr.length - 1; i++) {
    const left = myArr[i];
    const right = myArr[i + 1];
    const newAbsDiff = Math.abs(right - left);
    if (newAbsDiff < minDiff) minDiff = newAbsDiff;
  }
  return minDiff;
}

console.log(minimumAbsoluteDifference(arr));
