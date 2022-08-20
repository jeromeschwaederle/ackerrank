const n = 10;
const arr = "2 3 4 5 6 7 8 9 10 1".split(" ");

function insertionSort1(n, arr) {
  const valueToSort = arr.at(-1);
  for (let i = arr.length - 2; i >= 0; i--) {
    if (valueToSort < arr[i]) {
      arr[i + 1] = arr[i];
      console.log(arr.join(" "));
    }
    if (i === 0 && valueToSort < arr[i]) {
      arr[i] = valueToSort;
      console.log(arr.join(" "));
    }
    if (valueToSort > arr[i]) {
      arr[i + 1] = valueToSort;
      console.log(arr.join(" "));
      break;
    }
  }
}

insertionSort1(n, arr);
