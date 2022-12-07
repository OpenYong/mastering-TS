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
