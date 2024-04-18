function greetObj(person: {
  name: string;
  age?: number; // Optional property
}): void {
  if (person.age !== undefined) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
  } else {
    console.log(`Hello, ${person.name}!`);
  }
}

greetObj({ name: "Alice" }); // Output: Hello, Alice!
greetObj({ name: "Bob", age: 30 }); // Output: Hello, Bob! You are 30 years old.

function greet(name: string, age?: number): void {
  if (age !== undefined) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

// Example usage:
greet("Alice"); // Error: Expected 2 arguments, but got 1.
greet("Bob", 30); // Output: Hello, Bob! You are 30 years old

export {};
