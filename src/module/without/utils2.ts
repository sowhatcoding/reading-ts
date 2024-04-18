function calculate(a: number, b: number): number {
  return a * b;
}

// Assign the function to a global variable
(window as any).calculate = calculate;

export {};
