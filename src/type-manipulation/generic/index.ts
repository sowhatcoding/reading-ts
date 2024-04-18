interface Card {
  rank: number;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

const stringValue = identity<string>("string");
const numberValue = identity<number>(1);
const cardValue = identity<Card>({ rank: 1 });

const a = stringValue - 1; // The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type
const b = numberValue.split(","); // Property 'split' does not exist on type 'number'
cardValue.anything; // Property 'anything' does not exist on type 'Card'.
