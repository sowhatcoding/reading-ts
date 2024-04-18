const str = "Hello";
const num = 10;
const bool = true;

// String wrapper object
const wrapperStr = new String("Hello");
console.log(str.length); // Output: 5
console.log(str.toUpperCase()); // Output: HELLO

// Number wrapper object
const wrapperNum = new Number(10);
console.log(num.toFixed(2)); // Output: 10.00

// Boolean wrapper object
const wrapperBool = new Boolean(true);
console.log(bool.valueOf()); // Output: true
