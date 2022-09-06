const s = "aaabbbb";

function gameOfThrones(s) {
  const isEven = number => number % 2 === 0;

  const sCounted = new Array(26).fill(0);
  [...s].map(char => void sCounted[char.charCodeAt() - 97]++);

  return sCounted.reduce(
    (acc, curV) => {
      if (isEven(s.length) && !isEven(curV)) acc.answer = "NO";
      else {
        if (!isEven(curV)) acc.oddChar++;
        if (acc.oddChar > 1) acc.answer = "NO";
      }
      return acc;
    },
    { answer: "YES", oddChar: 0 }
  ).answer;
}

console.log(gameOfThrones(s));
