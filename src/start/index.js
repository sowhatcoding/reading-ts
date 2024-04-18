/**
 * ‘Type’
 * - data type (or simply type) is a collection or grouping of data values...
 * - number, string, boolean, object, array type 등을 구별할수 있게 해준다
 */

/**
 * Javascript Code
 */
let a = 10; // number
let b = "Hello"; // string
let c = true; // boolean
let d = [1, 2, 3]; // array
let e = { name: "Alice", age: 30 }; // object

a = "5";
b = 1000;

/**
 * Javascript : Dynamically typed languages
 * - 변수 Type 이 중간에 바뀔수 있다 (고정되어있지 않다) -> 유지보수하기 어렵다
 * - 프로그램 실행했을때(run-time) type 을 알수있다
 */
let count = 5; // 자바스크립트도 number 라고 알아서 지정해주지만

/**
 * 많은 코드 또는 함수 호출 스택..
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
count = "10"; // string 값을 새로 대입해도 아무 오류도 내지 않는다. 이제부터 string

/**
 * 많은 코드 또는 함수 호출 스택..
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

let totalCount = count + 5; // 10 + 5 = 15? ("10" + 5 = "105")

/**
 * x, y 에 number 를 받아야 되는데
 * 아무값이나 다 들어와도 막을 수 없다
 * @param {*} x
 * @param {*} y
 * @returns
 */
function add(x, y) {
  return x + y;
}

let sum = add(a, b); // 실행할때 의도하지 않은 이상한 값이 나옴 : "10Hello"

export {};
