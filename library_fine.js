const [d1, m1, y1, d2, m2, y2] = "9 6 2015 6 6 2015".split(" ").map(n => +n);

function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 > y2) return 10000;
  else if (y1 < y2) return 0;
  if (m1 > m2) return 500 * (m1 - m2);
  else if (m1 < m2) return 0;
  if (d2 < d1) return 15 * (d1 - d2);
  return 0;
}

console.log(libraryFine(d1, m1, y1, d2, m2, y2));
