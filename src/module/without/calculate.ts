// Access the calculate function from the global object
const calculate = (window as any).calculate;

// Use the function
const result = calculate(3, 4); // What will this do: add or multiply?
console.log(`Result: ${result}`);

export {};
