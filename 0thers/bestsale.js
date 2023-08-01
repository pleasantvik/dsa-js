const bestSale = (price) => {
  let left = 0;
  let right = 1;
  let value = 0;
  let max = 0;

  while (left < right && right < price.length) {
    if (price[left] > price[right]) {
      right++;
      left = right - 1;
    } else if (price[left] < price[right]) {
      value = price[right] - price[left];

      if (value > max) {
        max = value;
      }
      console.log(value);
      right++;
    }
  }
  return max > 0 ? max : "no profit";
};

console.log(bestSale([7, 1, 4, 3, 2, 0, 2]));
console.log(bestSale([7, 4, 3, 2, 1]));
