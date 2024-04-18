// Define a function that returns a string or undefined
function getMessage(): string | undefined {
  return Math.random() > 0.5 ? "Hello, World!" : undefined;
}

// Call the function and store the result in a variable
const message = getMessage();

// Accessing a property on message without null check
console.log(message.length); // This line will cause a runtime error if message is undefined
