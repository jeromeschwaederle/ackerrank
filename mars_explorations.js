const s = "SOSSPSSQSSOR";

function marsExploration(s) {
  const model = "SOS";
  return [...s].reduce((acc, curV, curI) => {
    if (curV !== model[curI % 3]) acc++;
    return acc;
  }, 0);
}

console.log(marsExploration(s));
