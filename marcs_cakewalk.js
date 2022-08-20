const calorie = [1, 3, 2];

const marcsCakewalk = calorie =>
  calorie.sort((a, b) => b - a).reduce((acc, curV, curI) => (acc += curV * 2 ** curI), 0);

console.log(marcsCakewalk(calorie));
