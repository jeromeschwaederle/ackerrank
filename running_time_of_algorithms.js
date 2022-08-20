const arr = [1, 4, 3, 5, 6, 2];

function runningTime(arr) {
  let operations = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      let j = i;
      while (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        j--;
        operations++;
      }
    }
  }
  return operations;
}

console.log(runningTime(arr));
