// Access the add and subtract functions from the global object
const add = (window as any).add;
const subtract = (window as any).subtract;

// Use the functions
const sum = add(5, 3);
console.log(`Sum: ${sum}`); // Output: Sum: 8

const difference = subtract(5, 3);
console.log(`Difference: ${difference}`); // Output: Difference: 2

export {};
