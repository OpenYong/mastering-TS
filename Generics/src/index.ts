const nums: number[] = [];
const nums2: Array<number> = [];
const colors: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
inputEl.value = "바보바보";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

// 98. Writing Our First Generic
function identity<Type>(item: Type): Type {
  return item;
}
identity<number>(7);
identity<string>("hello");
// identity<Cat>();

// 99. Writing Another Generic Function
function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

getRandomElement<string>(["가", "나", "다", "라"]);
getRandomElement<number>([1, 2, 3, 4, 5]);

// 100. Inferred Generic Type Parameters
// 전달되는 매개변수를 통해 제네릭 타입도 추론이 가능하다.
getRandomElement(["a", "b", "c"]);
getRandomElement([1, 2, 3]);

// 102. Generics With Multiple Types
function merge<T, U>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const mergedObj = merge({ name: "Yong" }, { skill: ["TypeScript", "JS"] });

// 103. Adding Type Constraints
// object 타입일때 전개 연산자를 사용할 수 있다.
// 그러므로 extends 키워드로 제네릭 타입에 Constraints를 추가해보자.
function merge2<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}
// const mergedObj2 = merge2({ name: "Yong" }, 9);
const mergedObj2 = merge2({ name: "Yong" }, { age: 9 });

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}
