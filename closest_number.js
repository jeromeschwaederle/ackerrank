const arr = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854];

function closestNumbers(arr) {
  const arrSorted = arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  let pairs = [];
  for (let i = 1; i < arrSorted.length; i++) {
    const difference = arrSorted[i] - arrSorted[i - 1];
    if (difference === minDiff) pairs.push(...[arrSorted[i - 1], arrSorted[i]]);
    if (difference < minDiff) {
      pairs = [];
      minDiff = difference;
      pairs.push(...[arrSorted[i - 1], arrSorted[i]]);
    }
  }
  return pairs;
}

console.log(closestNumbers(arr));
