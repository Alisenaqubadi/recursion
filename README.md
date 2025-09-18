# Fibonacci and Merge Sort Project

This project demonstrates **Fibonacci sequence generation** and **Merge Sort** in JavaScript, including both iterative and recursive approaches for Fibonacci numbers.

## Features

* **Iterative Fibonacci**: Generates the first `n` Fibonacci numbers using a loop.
* **Recursive Fibonacci**: Generates the first `n` Fibonacci numbers using recursion.
* **Merge Sort**: Sorts an array of numbers using the divide-and-conquer merge sort algorithm.

## Usage

1. Clone the repository and navigate to the project folder.
2. Run the code with Node.js:

```bash
node index.js
```

3. Example output:

```javascript
console.log(fibs(8))
// [0, 1, 1, 2, 3, 5, 8, 13]

console.log(fibsRec(8))
// [0, 1, 1, 2, 3, 5, 8, 13]

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
// [0, 1, 1, 2, 3, 5, 8, 13]
```

## Functions

### `fibs(a)`

Generates the first `a` Fibonacci numbers iteratively. Returns an array.

### `fibsRec(a)`

Generates the first `a` Fibonacci numbers recursively. Returns an array.

### `mergeSort(a)`

Sorts an array `a` of numbers using merge sort. Returns a sorted array.

## Notes

* Fibonacci functions validate input to ensure a positive integer.
* Merge Sort splits arrays using `slice` and recursively sorts subarrays.

