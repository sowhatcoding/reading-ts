// 3000 -> "3,000"
// "3000" -> "3,000"
function separateStrPrice(price: number | string): string {
  // Convert the input to a number if it's a string
  const priceNumber = typeof price === "string" ? parseInt(price) : price;

  // Check if the price is a valid number
  if (isNaN(priceNumber)) {
    throw new Error(
      "Invalid input: price must be a number or a string representing a number."
    );
  }

  // Format the price as a string with commas for thousands separators
  return priceNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
