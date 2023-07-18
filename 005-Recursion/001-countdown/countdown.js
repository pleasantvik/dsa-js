//Write a function that prints number in descending other

const countdown = (num) => {
  if (num <= 0) {
    console.log("Done");
    return;
  }
  console.log(num);
  num--;
  countdown(num);
};

console.log(countdown(5));
