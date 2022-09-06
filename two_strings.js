const s1 = "hello";
const s2 = "world";

function twoStrings(s1, s2) {
  const s1Set = [...new Set([...s1])];
  const s2Set = [...new Set([...s2])];
  for (let i = 0; i < s1Set.length; i++)
    for (let j = 0; j < s2Set.length; j++) if (s1Set[i] === s2Set[j]) return "YES";
  return "NO";
}

console.log(twoStrings(s1, s2));
