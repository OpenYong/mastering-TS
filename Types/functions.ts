// 17. Function Parameter Annotations
function square(num: number) {
  return num * num;
}

square(5);
// square("string"); // 에러
// square(true); // 에러

function greet(person: string) {
  console.log(`안녕하세요, ${person}님`);
}

greet("Yong");

// 18. More On Function Parameter Annotations
const doSomething = (person: string, age: number, isFunny: boolean) => {};
// 인자의 개수에 따라 혹인 인자의 타입에 따라 에러를 발생시킨다.
//  doSomething("Yong"); // 인자 개수가 맞지 않음,
//  doSomething("Yong",20, true, false); // 인자 개수가 맞지 않음,

// 19. Working With Default Parameters
function greeting(person: string = "누구세요") {
  console.log(`안녕하세요, ${person}님`);
}

// 20. Return Type Annotations
function returnGreet(person: string = "누구세요"): string {
  return `안녕하세요, ${person}님`;
}

function returnSquare(num: number): number {
  // num * num;
  return num * num;
}

const add = (x: number, y: number): number => {
  // 화살표 함수
  return x + y;
};

// 21. Anonymous Function Contextual Typing
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  //   return color.toFixed(); // 타입을 지정해주지 않더라도 TS는 추론을 통해 string이란 것을 안다.
  // 익명함수도 동일하게 type을 지정할 수 있다.
  return color.toUpperCase();
});

// 22. The Void Type
function printTwice(message: string): void {
  console.log(message);
  console.log(message);
  //   return "메시지 출력 완료"; // 에러: void는 반환해줄 데이터가 없다는 것을 의미하기 때문에
}

// 23. The Never Type
function makeError(message: string): never {
  throw new Error(message);
}

function gameLoop(): never {
  while (true) {
    console.log("게임 루프 도는 중");
  }
}
