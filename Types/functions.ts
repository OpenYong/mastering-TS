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

