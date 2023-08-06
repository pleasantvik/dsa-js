---

# Question

- Write a function to find the longest common prefix string amongst an array of strings.

- If there is no common prefix, return an empty string ""

# PSEUDOCODE

- create a variable longestPrefix to return at the end and set his value to empty string
- check if the length of the array equals 0 return empty string

- Create a for loop that iterates over the first item in the given array, the loop should keep running as long as i is less than length of the first item

  - initialize a variable that gets each character of a string - if string is flower, the value of the variable f at te firts iteration "l" in second "o" in third etc
  - loop over every item of the array and for each string check if the letters of the item in the iteration is same as the variable created - if all the arry pass the "every" method will return true and thus append the letter to longestPrefix variable - else break the loop

- return longestPrefix

- Check out the code

# **Example**

`Input: strs = ["flower","flow","flight"]
Output: "fl"`

## **Example**

`Input: strs = ["dog","racecar","car"]
Output: ""`

_Guaranteed constraints:_

- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lowercase English letters.
