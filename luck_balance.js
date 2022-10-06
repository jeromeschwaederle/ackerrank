const contests = [
  [5, 1],
  [2, 1],
  [1, 1],
  [8, 1],
  [10, 0],
  [5, 0],
];

const k = 3;

function luckBalance(k, contests) {
  let luck = 0;
  const importantContests = returnArrImportantOrNot(contests, 1);
  const notImportantContests = returnArrImportantOrNot(contests, 0);

  if (notImportantContests.length > 0)
    luck += notImportantContests.reduce((prevV, curV) => prevV + curV);

  for (let i = 0; i < importantContests.length; i++) {
    if (i < k) luck += importantContests[i];
    else luck -= importantContests[i];
  }
  return luck;
}

const returnArrImportantOrNot = (contestsArr, oneOrZero) => {
  const myArr = [];
  contestsArr.map(contest => {
    if (contest[1] === oneOrZero) myArr.push(contest[0]);
  });
  return myArr.sort((a, b) => b - a);
};

console.log(luckBalance(k, contests));
