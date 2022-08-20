const missingNumbers = (arr, brr) => {
  const countingSort = arr => {
    const countingArr = new Array(Math.max.apply(null, arr) + 1).fill(0);
    arr.map(v => void countingArr[v]++);
    return countingArr;
  };

  const missing = [];
  const countArr = countingSort(arr);
  const countBrr = countingSort(brr);
  countBrr.map((occ, index) => {
    if (occ > 0) if (countArr[index] < occ) if (!missing.includes(index)) missing.push(index);
  });

  return missing;
};
