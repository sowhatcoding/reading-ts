// 3000 -> 3,000
function seperatePrice(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Example usage
let priceString = "20000";
let priceFromStr = parseInt(priceString);

console.log(seperatePrice(priceFromStr)); // Output: 20,000

// Example usage
let priceObject = { value: 20000 };
let priceFromNum = priceObject.value;

console.log(seperatePrice(priceFromNum)); // Output: 20,000
