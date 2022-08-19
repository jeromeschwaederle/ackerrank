const s = "acxz";
// const s = "bcxz";

function funnyString(s) {
  const sCode = s.split("").map(char => char.charCodeAt());
  const sCodeReverse = [...sCode].reverse();
  const diffArrSCode = [];
  const diffArrSCodeReverse = [];
  for (let i = 0; i < sCode.length - 1; i++) {
    diffArrSCode.push(Math.abs(sCode[i] - sCode[i + 1]));
    diffArrSCodeReverse.push(Math.abs(sCodeReverse[i] - sCodeReverse[i + 1]));
    if (diffArrSCode[i] !== diffArrSCodeReverse[i]) return "Not Funny";
  }
  return "Funny";
}

console.log(funnyString(s));
