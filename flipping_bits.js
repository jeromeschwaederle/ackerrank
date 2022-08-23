const n = 9;

const flippingBits = n =>
  parseInt(
    n
      .toString(2)
      .padStart(32, "0")
      .split("")
      .map(n => (n === "0" ? "1" : "0"))
      .join(""),
    2
  );

console.log(flippingBits(n));
