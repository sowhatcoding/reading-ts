// Array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Use map to square each number and return a new array
const squaredNumbers = numbers.map((num) => num * num);
console.log("Squared numbers:", squaredNumbers); // Output: Squared numbers: [1, 4, 9, 16, 25]

// Array of strings
const strings: string[] = ["apple", "banana", "cherry"];

// Use map to get the length of each string and return a new array
const lengths = strings.map((str) => str.length);
console.log("Lengths of strings:", lengths); // Output: Lengths of strings: [5, 6, 6]
