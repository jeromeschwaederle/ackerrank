const i = 20;
const j = 23;
const k = 6;

function beautifulDays(i, j, k) {
  const reverse = number => parseInt(number.toString().split("").reverse().join(""), 10);
  let nbOfBeautifulDays = 0;
  for (let l = i; l <= j; l++) if (Number.isInteger((l - reverse(l)) / k)) nbOfBeautifulDays++;
  return nbOfBeautifulDays;
}

console.log(beautifulDays(i, j, k));
