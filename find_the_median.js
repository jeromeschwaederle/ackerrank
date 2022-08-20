const findMedian = arr => {
  const arrSorted = arr.sort((a, b) => a - b);
  return arrSorted[Math.floor(arrSorted.length / 2)];
};
