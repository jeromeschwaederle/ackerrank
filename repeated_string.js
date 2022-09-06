const s = "aba";
const n = 10;

const repeatedString = (s, n) =>
  s.split("").filter(char => char === "a").length * Math.floor(n / s.length) +
  s
    .slice(0, n % s.length)
    .split("")
    .filter(char => char === "a").length;

console.log(repeatedString(s, n));
