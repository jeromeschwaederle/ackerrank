const [n, c, m] = "10 2 5".split(" ");

function chocolateFeast(n, c, m) {
  let money = n;
  let cost = c;
  let eatenBarsToGetOneMore = m;

  let barsEaten = Math.floor(money / cost);
  let barWrappers = barsEaten;
  money = money % cost;

  while (barWrappers >= eatenBarsToGetOneMore) {
    barWrappers -= eatenBarsToGetOneMore;
    barsEaten++;
    barWrappers++;
  }

  return barsEaten;
}

console.log(chocolateFeast(n, c, m));
