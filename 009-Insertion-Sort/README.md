# Insertion Sort

## Description

- This algorithm build up by constantly having a left sorted array
- It compares the item on the right to those in the left position and gradully insert the iteminto its sorted position

# PSEUDOCODE

- (1). Define the function which takes an array parameter

- (2). Start looping at the second elemnt in the array, i.e start at i = 1

- (3). Create a variable that holds the value of the start position.

        - Note: this will b the first elment in the first loop and it changes with every increment of i

        - `let currentValue = arr[i]`

- (4). create an inner loop that start at i - 1 and runs as long as j >=0 && arr[j] > currentValue

- (5). Check if currentValue is < arr[j] if yes swap

- (6). Return the arr

**EXAMPLE**
check the code in 008-Insertion-Sort Folder

## Big O

`BEST CASE`
O(n)

`WORST CASE` and `Average Case`

- Its O(n square)
