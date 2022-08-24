const s =
  "asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
const t =
  "bsdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv";
const k = 100;

function appendAndDelete(s, t, k) {
  const firstDiff = (s, t) => {
    const longestLength = Math.max(s.length, t.length);
    for (let i = 0; i < longestLength; i++) if (s.split("")[i] !== t.split("")[i]) return i;
  };

  const diffIndex = firstDiff(s, t);
  if (typeof diffIndex === "number") {
    const lengthToChange = s.slice(diffIndex).length + t.slice(diffIndex).length;
    if (lengthToChange > k) return "No";

    if (lengthToChange % 2 !== 0 && k % 2 === 0) return "No";
  } else {
    if (k === 1) return "No";
    else return "Yes";
  }
  return "Yes";
}

console.log(appendAndDelete(s, t, k));
