// type Point = {
//   x: number;
//   y: number;
// };

function printCoord(point: { x: number; y: number }) {
  console.log("The coordinate's x value is " + point.x);
  console.log("The coordinate's y value is " + point.y);
}

printCoord({ x: 100, y: 100 });

function calculateDistance(
  point1: {
    x: number;
    y: number;
  },
  point2: {
    x: number;
    y: number;
  }
): number {
  const deltaX = point2.x - point1.x;
  const deltaY = point2.y - point1.y;
  return Math.sqrt(deltaX ** 2 + deltaY ** 2);
}

// Example usage:
const pointA = { x: 1, y: 2 };
const pointB = { x: 4, y: 6 };
const distance = calculateDistance(pointA, pointB);
console.log("Distance between pointA and pointB:", distance);
