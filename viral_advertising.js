const n = 3;

function viralAdvertising(n) {
  const nbLiked = n => Math.floor(shared / 2);
  let shared = 5;
  let liked = nbLiked(shared);
  let cumulative = liked;

  for (let i = 2; i <= n; i++) {
    shared = liked * 3;
    liked = nbLiked(shared);
    cumulative += liked;
  }
  return cumulative;
}

console.log(viralAdvertising(n));
