const [h, word] = [
  [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  "abc",
];

function designerPdfViewer(h, word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return (
    word
      .trim()
      .split("")
      .reduce((acc, curV) => {
        const letterHeight = h[alphabet.findIndex(e => e === curV)];
        if (letterHeight > acc) acc = letterHeight;
        return acc;
      }, 0) * word.trim().length
  );
}

console.log(designerPdfViewer(h, word));
