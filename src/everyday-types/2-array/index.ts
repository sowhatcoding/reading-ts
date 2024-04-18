/**
 *  Tuple : finite sequence or ordered list of numbers
 */

// Tuple with a single number element
let singleNumberTuple: [number];

singleNumberTuple = [5]; // OK
// singleNumberTuple = [5, 10]; // Error: Type '[number, number]' is not assignable to type '[number]'.

console.log(singleNumberTuple[0]); // Output: 5
// console.log(singleNumberTuple[1]); // Error: Tuple type '[number]' of length '1' has no element at index '1'.

// Array of numbers
let arrayOfNumbers: number[];

arrayOfNumbers = [5]; // OK
arrayOfNumbers = [5, 10]; // OK

console.log(arrayOfNumbers[0]); // Output: 5
console.log(arrayOfNumbers[1]); // Output: 10
