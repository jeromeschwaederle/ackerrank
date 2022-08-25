const pangrams = s => {
  return "abcdefghijklmnopqrstuvwxyz "
    .split("")
    .map(char => s.toLowerCase().includes(char))
    .every(bool => bool === true) === true
    ? "pangram"
    : "not pangram";
};
