# Binary Search

- This works when searching through a `SORTED DATA`.
- THE DATA MUST BE SORTED FOR THIS TECHNIQUE TO WORK

# Implementation

- It uses the divide and conquer method;
  `Divides a big data into chunks and gets rid of half the data in each iteration`

# PSEUDOCODE

- (1). The function accepted sorted array of data and a target value

- (2). Create 3 variables - leftPosition => Starting at the beginning pf the array - rightPosition => `Starting at the end of the array` - middlePoint => (leftPosition + rightPosition) / 2
- (3). Loop while the leftPosition is smaller than the rightPosition

        - Check if the middlePoint value equals the target, if yes return the middle, if not continue

        - If middlePoint Value is gretaer than target, move the leftPosition up `leftPosition = middlePosition + 1`

        - If middlePoint Value is smaller than target, move the roghtPosition down `rightPosition = middlePosition - 1`

- (4). If the target does not exist return -1

**EXAMPLE**
check the code in 006-Binary-Search Folder

## Big O

`BEST CASE`
0(1)

`WORST CASE` and `Average Case`

- Its O(log n)
