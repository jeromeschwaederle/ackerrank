const n = 6;
const arr = [1, 4, 3, 5, 6, 2];

function insertionSort2(n, arr) {
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] > arr[i]) {
      let j = i;
      while (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        j--;
      }
    }
    console.log(arr.join(" "));
  }
}

insertionSort2(n, arr);
