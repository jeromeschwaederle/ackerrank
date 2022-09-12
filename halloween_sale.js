const p = 100;
const d = 19;
const m = 1;
const s = 180;

function howManyGames(p, d, m, s) {
  let [budget, price, counter] = [s, p, 0];
  if (price > budget) return counter;
  while (price > m && budget > price) {
    counter += 1;
    budget -= price;
    price -= d;
  }
  if (price > budget) return counter;
  price = m;
  while (budget - price >= 0) {
    counter += 1;
    budget -= price;
  }
  return counter;
}

console.log(howManyGames(p, d, m, s));
