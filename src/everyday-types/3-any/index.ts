function someFuncHasAny(primitive: number, obj: any) {
  const objVal = obj.someValue;
  return primitive + objVal;
}

// Correct usage
const result = someFuncHasAny(5, { someValue: 10 });
console.log(result); // Output: 15

// Incorrect usage: Incorrect object provided
const incorrectFirst = someFuncHasAny(5, { someVal: 10 }); // Error at runtime
const incorrectSecond = someFuncHasAny(5, { someValue: "10" }); // Error at runtime
console.log(incorrectFirst); // runtime error
console.log(incorrectSecond); // runtime error
