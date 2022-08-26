const s = "AAABBB";

const alternatingCharacters = s =>
  s.length -
  [...s].reduce(
    (acc, curV, curI) => {
      if (curI === 0) return acc;
      if (curV !== acc.curChar) {
        acc.curChar = curV;
        acc.nbChar++;
      }
      return acc;
    },
    { curChar: s[0], nbChar: 1 }
  ).nbChar;

console.log(alternatingCharacters(s));
