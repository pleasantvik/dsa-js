let total = 0;

total += "hello".charCodeAt(0);

console.log(total);

function hash(key, arrLen) {
  let total = 0;
  let PRIME_NUM = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;

    total = (total * PRIME_NUM + value) % arrLen;
  }
  return total;
}

console.log(hash("pink", 13));
console.log(hash("orangered", 13));
console.log(hash("cyan", 13));
console.log(hash("blue", 13));
console.log(hash("red", 13));
console.log(hash("purple", 13));
