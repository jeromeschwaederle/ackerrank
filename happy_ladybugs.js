const b = "AABCBC";

function happyLadybugs(b) {
  let uniqueLetter = false;
  let underscore = false;
  let groupedLetters = true;
  const stringSet = [...new Set([...b])];

  stringSet.map(char => {
    if (char.match(/[A-Z]/)) {
      if ([...b].filter(x => x === char).length === 1) uniqueLetter = true;
    } else underscore = true;
  });

  if (b.length > 1)
    for (let i = 1; i <= b.length - 2; i++)
      if (b[i - 1] !== b[i] && b[i + 1] !== b[i]) groupedLetters = false;

  if (uniqueLetter) return "NO";
  if (!groupedLetters && !underscore) return "NO";
  return "YES";
}

console.log(happyLadybugs(b));

/*
AABBC
AABBC_C
_
DD__FQ_QQF
AABCBC
*/
