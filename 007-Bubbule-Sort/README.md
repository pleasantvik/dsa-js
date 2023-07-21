# Bubble Sort

## Description

- This is a sorting algorithm where the largest values bubbles on move to the topmost position one at a time

- As we loop through the data list we compare the current elment to the next and swap them if current is larger than the next

# PSEUDOCODE

- (1). Define the function which takes an array parameter

- (2). Loop over the array with a variable i which start at the end of the array and moves towards the beginning of the array

- (3) Create a inner loop with variable j which start at the beginning of the array and moves until i -1

        - Check if arr[j] is greater than arr[j+1]. If yes swap

- (4) Return the sorted array

**EXAMPLE**
check the code in 007-Bubble-Sort Folder

## Big O

`BEST CASE`
O(n)

`WORST CASE` and `Average Case`

- Its O(n square)
