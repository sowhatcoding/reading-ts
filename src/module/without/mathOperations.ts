// Define a function to add two numbers
function add(a: number, b: number): number {
  return a + b;
}

// Define a function to subtract two numbers
function subtract(a: number, b: number): number {
  return a - b;
}

// Assign the functions to properties of a global object (window or global)
(window as any).add = add;
(window as any).subtract = subtract;

export {};
