interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  position: string;
}

function greet(person: Person) {
  return "Hello " + person.name;
}

function assignWork(employee: Employee, task: string) {
  console.log(
    `${employee.name}, with employee ID ${employee.employeeId}, is assigned to ${task} as a ${employee.position}.`
  );
}

// Usage

const person: Person = {
  name: "Alice",
  age: 25,
};

const employee: Employee = {
  name: "Bob",
  age: 30,
  employeeId: 12345,
  position: "Software Engineer",
};

console.log(greet(person)); // Output: Hello Alice
console.log(greet(employee)); // Output: Hello Bob

assignWork(employee, "developing a new feature");
// Output: Bob, with employee ID 12345, is assigned to developing a new feature as a Software Engineer.
