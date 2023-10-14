export function factorial(num) {
  if (num <= 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

// console.log(factorial(4));

// RECURSIVE
function facto(num) {
  function help(numInput) {
    if (numInput <= 0) return 1;

    return numInput * help(numInput - 1);
  }

  return help(num);
}
console.log(facto(4));
