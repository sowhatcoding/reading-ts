function isSizeAvailable(
  size: "Small" | "Medium" | "Large",
  category: "Shirt" | "Pants"
): boolean {
  switch (category) {
    case "Shirt":
      return size !== "Small"; // Small sizes not suitable for shirts
    case "Pants":
      return size !== "Large"; // Large sizes not suitable for pants
    default:
      throw new Error(`Unknown category: ${category}`);
  }
}

// function isSizeAvailable(size: 'S' | 'M' | 'L', category: 'Shirt' | 'Pants'): boolean {
//     switch (category) {
//         case 'Shirt':
//             return size !== 'S'; // Small sizes not suitable for shirts
//         case 'Pants':
//             return size !== 'L'; // Large sizes not suitable for pants
//         default:
//             throw new Error(`Unknown category: ${category}`);
//     }
// }

// // Function call with correct size value ('S' instead of 'Small')
// const isShirtAvailable: boolean = isSizeAvailable('S', 'Shirt')

export { isSizeAvailable };
