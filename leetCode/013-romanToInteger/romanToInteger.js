function romToInt(str) {
  let romanNumeral = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    let current = romanNumeral[str[i]];
    let next = romanNumeral[str[i + 1]];

    if (current > next || next === undefined || current === next) {
      sum += current;
    } else {
      sum += next - current;
      i++;
    }
  }
  return sum;
}

console.log(romToInt("III"));
