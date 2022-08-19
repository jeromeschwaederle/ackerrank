const n = 3;
const password = "Ab1";

function minimumNumber(n, password) {
  let charToAdd = 0;
  if (!password.match(/[A-Z]/)) charToAdd++;
  if (!password.match(/[a-z]/)) charToAdd++;
  if (!password.match(/\d/)) charToAdd++;
  if (!password.match(/[!@#$+%^)(&*-]/)) charToAdd++;
  if (n + charToAdd < 6) charToAdd += 6 - (n + charToAdd);
  return charToAdd;
}

console.log(minimumNumber(n, password));
