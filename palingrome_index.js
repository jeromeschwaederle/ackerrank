const s = "quyjjdcgsvvsgcdjjyq";
// const s = "aaa";

function palindromeIndex(s) {
  const removeOneEl = (arr, elIndex) => [...arr.slice(0, elIndex), ...arr.slice(elIndex + 1)];

  let c1 = 0;
  let c2 = s.length - 1;
  let indexToRemove = undefined;

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[c1] !== s[c2]) {
      indexToRemove = [c1, c2];
      break;
    }
    c1++;
    c2--;
  }

  if (indexToRemove === undefined) return -1;

  return indexToRemove[
    indexToRemove
      .map(index => {
        const palindrome = removeOneEl([...s], index);
        let curs1 = 0;
        let curs2 = palindrome.length - 1;
        let answer = true;
        for (let i = 0; i < Math.floor(palindrome.length / 2); i++) {
          if (palindrome[curs1] !== palindrome[curs2]) {
            answer = false;
            break;
          }
          curs1++;
          curs2--;
        }
        return answer;
      })
      .findIndex(el => el === true)
  ];
}

console.log(palindromeIndex(s));
