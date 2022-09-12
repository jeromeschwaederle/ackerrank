const n = 6;

const gameOfStones = n => (n % 7 < 2 ? "Second" : "First");

console.log(gameOfStones(n));
