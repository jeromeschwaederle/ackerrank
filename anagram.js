const s = "hhpddlnnsjfoyxpciioigvjqzfbpllssuj";

function anagram(s) {
  if (s.length % 2 !== 0) return -1;

  const s1 = s.slice(0, s.length / 2);
  let s2 = s.slice(s.length / 2);
  for (let i = 0; i < s1.length; i++) s2 = s2.replace(s1[i], "");
  return s2.length;
}

console.log(anagram(s));
