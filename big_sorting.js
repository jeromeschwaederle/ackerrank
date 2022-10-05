const unsorted = ["31415926535897932384626433832795", "1", "3", "10", "3", "5"];

function bigSorting(unsorted) {
  return unsorted.sort((a, b) => Number(BigInt(a) - BigInt(b)));
}

console.log(bigSorting(unsorted));

function mergeSort(arr) {
  function mergeSortedArrays(arr1, arr2) {
    const arr = [];
    while (arr1.length > 0 && arr2.length > 0) {
      if (arr1[0] < arr2[0]) {
        arr.push(arr1.shift());
      } else {
        arr.push(arr2.shift());
      }
    }
    return [...arr, ...arr1, ...arr2];
  }

  const half = Math.floor(arr.length / 2);

  if (arr.length === 1) {
    return arr;
  }

  const left = arr.slice(0, half);
  const right = arr.slice(half);

  return mergeSortedArrays(mergeSort(left), mergeSort(right));
}
