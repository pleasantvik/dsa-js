export const longestCommonPrefix = (strs) => {
  // Create the variable longest prefix to return at the end
  let longestPrefix = "";
  // Base case
  if (strs.length === 0) return "";

  // Loop over the first item of the array and keep the loop going as long as i is less than the length
  for (let i = 0; i < strs[0].length; i++) {
    // Get each character of the first string
    let character = strs[0][i];

    // Loop over each letters of the string in the array and check if every of the string has a corresponding letter equals to the character
    if (strs.every((item) => item[i] === character)) {
      longestPrefix += character;
    } else {
      break;
    }
  }

  return longestPrefix;
};

let str = ["flower"];
let char = str[0][4];

console.log(char);

console.log(longestCommonPrefix(["flower", "flour", "flow", "flake"]));
