function pattern(bit) {
  bitString = bit.split(".")[0];
  const map = {};
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
  const uniBitArray = [...new Set(bitString)];
  for (let i = 0; i < uniBitArray.length; i++) {
    map[uniBitArray[i]] = letters[i];
  }
  const patternArray = [];
  [...bitString].forEach((i) => patternArray.push(map[i]));
  return patternArray.join("");
}

const patternResult = pattern("3665133560.bit");
console.log(patternResult);
