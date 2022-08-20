const V = 4;
const arr = [1, 4, 5, 7, 9, 12];

const introTutorial = (V, arr) => arr.findIndex(v => v === V);

console.log(introTutorial(V, arr));
