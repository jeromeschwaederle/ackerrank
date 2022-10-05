const [n, k, arr] = [5, 3, [4, 2, 6, 1, 10]];

function workbook(n, k, arr) {
  const nbProblemsPerPage = k;
  const problemsNumberPerChapter = arr;

  let currentPage = 1;
  let problemsOnPage = 0;
  let specialProblemCounter = 0;

  for (let i = 0; i < problemsNumberPerChapter.length; i++)
    for (let j = 1; j <= problemsNumberPerChapter[i]; j++) {
      if (j === currentPage) specialProblemCounter++;
      problemsOnPage++;
      if (problemsOnPage === nbProblemsPerPage || j === problemsNumberPerChapter[i]) {
        currentPage++;
        problemsOnPage = 0;
      }
    }
  return specialProblemCounter;
}

console.log(workbook(n, k, arr));
