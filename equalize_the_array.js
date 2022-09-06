const arr = [3, 3, 2, 1, 3];

function equalizeArray(arr) {
  const arrCount = new Array(Math.max(...arr) + 1).fill(0);
  arr.map(n => void arrCount[n]++);
  return arr.length - Math.max(...arrCount);
}

console.log(equalizeArray(arr));
