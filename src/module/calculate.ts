import { calculate } from "./utils1";

// Duplicate identifier 'calculate'
import { calculate } from "./utils2";

// Use the imported functions
const sum = calculate(3, 4);
console.log(`Sum: ${sum}`); // Output: Sum: 7

const product = calculate(3, 4);
console.log(`Product: ${product}`); // Output: Product: 12
