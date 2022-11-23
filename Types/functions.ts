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
