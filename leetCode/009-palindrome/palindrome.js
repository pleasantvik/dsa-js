/**
 * Given an integer x, return true if x is a 
palindrome
, and false otherwise
 */

let isPalindrome = function (x) {
  const xStr = x.toString().toLowerCase();
  const rev = xStr.split("").reverse().join("");

  if (rev === xStr) return true;
  return false;
};
