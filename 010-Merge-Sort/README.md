# Merge Sort

## Description

- This works by splitting larger array into smaller array of 0 or 1 element and then building them back up
- It works on the premise that an empty array or an array of a single elment is sorted - Merge sort is a combination of three things - (1). Splitting - (2). Sorting - (3). Merging

# PSEUDOCODE

## Create a merge helper function

- (1). Create an helper function that takes in two sorted array and return the merge

        - (1) The function name is mergeFunc, it takes in two parameter  arr1  and arr2 `Note: The funtion should only be called with sorted array`
        - (2) create an empty variable called result and initialize it to an empty array

        - (3) create tow variable i and j which start at 0

        - (4) loop over the array while the value of i is less than arr1 and value of j is less than arr2

        - (5) check if the arr1[i] is less than arr2[j]. If yes, push the value of arr[i] into result and increment the value of i by 1 else push the value of arr2[j] into result and increment the value of j by 1

        - (6) Create another while loop thst runs as long as i is less than arr1.length, in this loop push the value of arr1[i] to result and increment i

        - (7) repeat step 6 for j

        - Note step 6 and 7 handles the case where one of the arr is empty while the other still has element in it

        - (8) return result

- (2). Create a function called mergeSort, which takes in an array as argument>. This function will run recursively

        - 1. Create a base case for the recursion. i.e if arr.length is <= 1  return arr

        - 2. Create a variable called midPoint whose value is the length of the arr divide by 2. Note value must be whole number, hence use Math.floor() to round it

        3. create two variable left and right and set their value to call mergeSort with a slice ofthe array

        ` let left = mergeSort(arr.slice(0,mid))`
        ` let right = mergeSort(arr.slice(mid))`

        - this helps break the large chunk array recursively into smaller chunk until an empty array or an array with single elemnt is return

- (3). finally return mergeFunc(left, right) : this will be the soted array

Check code snippet in 010-Merge-Sort folder

- (4). create an inner loop that start at i - 1 and runs as long as j >=0 && arr[j] > currentValue

- (5). Check if currentValue is < arr[j] if yes swap

- (6). Return the arr

**EXAMPLE**
check the code in 008-Insertion-Sort Folder

## Big O

`BEST CASE`
O(n log n)

`WORST CASE` and `Average Case`

- Its O(n log n)
