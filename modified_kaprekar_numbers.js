const p = 1;
const q = 100;

function kaprekarNumbers(p, q) {
  let answer = "";
  for (let i = p; i <= q; i++) {
    const iSquareString = (i * i).toString();
    const r = iSquareString.slice(-i.toString().length);
    const l = iSquareString.slice(0, Math.floor(iSquareString.length / 2));
    if (Number(r) + Number(l) === i) answer += `${i} `;
  }
  if (answer.length === 0) console.log("INVALID RANGE");
  else console.log(answer.trim());
}

kaprekarNumbers(p, q);
