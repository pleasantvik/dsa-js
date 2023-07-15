//Write a function called same, which accepts two arrays. The function should return true if every value in the array has a corrresponding squared value in the second array. The frequency must be same

// Example;
/**
 * same([1,2,3], [4,1,9]) ---- true
 * same([1,2], [4,1,9]) ---- false
 */

function same(arr1, arr2) {
  //BASE CASE
  if (arr1.length !== arr2.length) {
    return false;
  }

  //CREATE TWO OBJ TO CONSTRUCT THE VALUE OF THE ARRAY AND THE NUMBER OF TIMES IT OCCUR
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  //LOOP OVER THE KEY IN OBJ 1 and SEE IF IT HAS CORRESPONDING KEY IN 2
  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    //CHECK IF THE FREQUCY OF OCCURENCE OF THE TWO OBJ CORRELATE
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

const check = same([1, 2, 3], [4, 1, 9]);

console.log(check);

module.exports = same;

// const obj = {
//   user: "adedayo",
//   sex: "male",
//   age: 32,
//   state: "Ekiti",
// };

// for (const item in obj) {
//   console.log(item);
// }

//Type casting
// console.log(("2" as any) ** 2);
