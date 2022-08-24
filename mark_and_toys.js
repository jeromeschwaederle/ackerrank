const prices = [1, 12, 5, 111, 200, 1000, 10];
const k = 50;

const maximumToys = (prices, k) =>
  prices
    .sort((a, b) => a - b)
    .reduce(
      (acc, curV) => {
        if (acc.totalPrice + curV <= k) {
          acc.totalPrice += curV;
          acc.nbToys++;
        }
        return acc;
      },
      { nbToys: 0, totalPrice: 0 }
    ).nbToys;

console.log(maximumToys(prices, k));
