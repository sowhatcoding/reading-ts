// 3000 -> "3,000"
// "3000" -> "3,000"
// {value : 3000} -> "3,000"

// Function to separate and format price
function separateUnionPrice(
  price: number | string | { value: number }
): string {
  let priceNumber: number;

  // Extract price value from object if provided
  if (
    typeof price === "object" &&
    "value" in price &&
    typeof price.value === "number"
  ) {
    priceNumber = price.value;
  } else {
    // Convert the input to a number if it's a string
    priceNumber =
      typeof price === "string" ? parseInt(price) : (price as number);
  }

  // Check if the price is a valid number
  if (isNaN(priceNumber)) {
    throw new Error(
      "Invalid input: price must be a number or a string representing a number."
    );
  }

  // Format the price as a string with commas for thousands separators
  return priceNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Example usage
console.log(separateUnionPrice(123)); // Output: 123
console.log(separateUnionPrice("456")); // Output: 456
console.log(separateUnionPrice({ value: 789 })); // Output: 789
