const s = "abcd";

function theLoveLetterMystery(s) {
  let changes = 0;
  let p1, p2;
  const isEven = s.length % 2 === 0;
  if (isEven) {
    p1 = Math.floor(s.length / 2) - 1;
    p2 = Math.floor(s.length / 2);
  } else {
    p1 = Math.floor(s.length / 2) - 1;
    p2 = Math.ceil(s.length / 2);
  }

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    changes +=
      Math.max(s[p1].charCodeAt(), s[p2].charCodeAt()) -
      Math.min(s[p1].charCodeAt(), s[p2].charCodeAt());
    p1--;
    p2++;
  }

  return changes;
}

console.log(theLoveLetterMystery(s));
