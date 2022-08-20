const arr = [4, 5, 3, 7, 2];

function quickSort(arr) {
  const equal = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > equal) right.push(arr[i]);
    else left.push(arr[i]);
  }
  return [...left, equal, ...right];
}

console.log(quickSort(arr));
