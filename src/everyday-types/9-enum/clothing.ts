enum Size {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  //   Small = "S",
  //   Medium = "M",
  //   Large = "L",
}

enum ClothingCategory {
  Shirt = "Shirt",
  Pants = "Pants",
}

function isSizeAvailable(size: Size, category: ClothingCategory): boolean {
  switch (category) {
    case ClothingCategory.Shirt:
      return size !== Size.Small; // Small sizes not suitable for shirts
    case ClothingCategory.Pants:
      return size !== Size.Large; // Large sizes not suitable for pants
    default:
      throw new Error(`Unknown category: ${category}`);
  }
}

// Function call with correct size value ('Size.Small' instead of 'Small')
const isShirtAvailable: boolean = isSizeAvailable(
  Size.Small,
  ClothingCategory.Shirt
);

export { isSizeAvailable };
