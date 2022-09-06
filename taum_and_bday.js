const [b, w, bc, wc, z] = "742407782 90529439 847666641 8651519 821801924".split(" ").map(n => +n);

function taumBday(b, w, bc, wc, z) {
  b = BigInt(b);
  w = BigInt(w);
  bc = BigInt(bc);
  wc = BigInt(wc);
  z = BigInt(z);
  if (bc + z < wc) return w * (bc + z) + b * bc;
  if (wc + z < bc) return b * (wc + z) + w * wc;
  else return b * bc + w * wc;
}

console.log(taumBday(b, w, bc, wc, z));
