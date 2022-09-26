const s = "ddktxrmyabHbbhAghghxuGzhjtlonyCiticmknuamq";

const camelcase = s =>
  s.split("").reduce((acc, curV) => (curV === curV.toUpperCase() ? acc + 1 : acc), 1);

console.log(camelcase(s));
