/**
 * 'Type' Script
 * - static type language : 변수 Type 고정된다
 * - 프로그램 실행하기 전(Compile time)에 type 을 알수있다
 */

/**
 * - 변수를 number, string, boolean, object, array type 으로 고정시켜준다
 * - Type Inference (타입 추론) : 타입을 TS Complier가 알수 있는 경우에는, 타입을 지정해주지 않아도 타입스크립트가 지정해준다
 */
let a = 10; // let a: number = 10;
let b = "Hello"; // let b: string = "Hello";
let c = true; // let c: boolean = true;
let d = [1, 2, 3]; // let d: number[] = [1, 2, 3];
let e = { name: "Alice", age: 30 }; // let e: { name: string; age: number } = { name: "Alice", age: 30 };

/**
 * Static Type Checking : 프로그램 실행전에 타입 에러 검사
 */
a = "5";
b = 1000;

let count = 5; // ': number' 라고 지정 안해줘도 타입스크립트가 number 라고 알아서 지정해줌
count = "10"; // Type 'string' is not assignable to type 'number'.ts(2322)
let totalCount = count + 5; // 무조건 숫자 + 5

function add(x: number, y: number): number {
  return x + y;
}

/**
 * Type Safety
 * - Type 을 잘못 사용하면 Typescript 에서 바로 오류 발생시킴
 */
let sum = add(a, b); // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

export {};
