const arr = ["abcdde", "baccd", "eeabg"];

function gemstones(arr) {
  let mineralsArr = [];
  arr.map(stone => void (mineralsArr = [...new Set([...mineralsArr, ...stone])]));
  return mineralsArr
    .map(mineral => arr.every(stone => stone.includes(mineral)))
    .filter(bool => bool === true).length;
}

console.log(gemstones(arr));
