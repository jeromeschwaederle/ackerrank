const b = "0100101010";

function beautifulBinaryString(b) {
  let counter = 0;
  for (let i = 0; i < b.length - 2; i++) {
    const model = "010";
    if (`${b[i]}${b[i + 1]}${b[i + 2]}` === model) {
      counter++;
      i += 2;
    }
  }
  return counter;
}

console.log(beautifulBinaryString(b));
