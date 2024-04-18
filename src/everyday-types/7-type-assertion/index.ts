// Simulate data received from an API call
const apiResponse: any = {
  id: 1,
  title: "Hello, TypeScript!",
  content: "TypeScript is awesome!",
};

// error if use any
console.log(apiResponse.like); // Error 못잡음

// Define an interface representing the structure of data received from the API
interface Content {
  id: number;
  title: string;
  content: string;
}

// Type assertion using 'as' keyword
const content1 = apiResponse as Content;

// Type assertion using angle bracket syntax
const content2 = <Content>apiResponse;

// Access properties of the postData objects
console.log(content1.like); // Error!!!

console.log(content1.id); // Output: 1
console.log(content2.title); // Output: Hello, TypeScript!
