// const n = 12;
const n = 1012;

function findDigits(n) {
  let divisor = 0;
  const digitArr = n
    .toString()
    .split("")
    .map(n => +n)
    .map(digit => {
      if (n % digit === 0) divisor++;
    });
  return divisor;
}

console.log(findDigits(n));
