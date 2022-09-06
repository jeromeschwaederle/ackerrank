const arr = [5, 4, 4, 2, 2, 8];

function cutTheSticks(arr) {
  const answer = [];
  while (arr.length > 0) {
    answer.push(arr.length);
    const min = Math.min(...arr);
    arr = arr.filter(n => n !== min).map(n => n - min);
  }
  return answer;
}

console.log(cutTheSticks(arr));
