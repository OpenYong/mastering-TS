// 25. Working With Object Types

// Objects as parameters:
function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "철수", last: "김" });

// 26. More Object Types

let coordinate: { x: number; y: number } = { x: 34, y: 99 };

// 함수의 반환 타입도 객체로 설정해줄 수 있다.
function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: 99 };
}

// 27. Excess Properties
printName({ first: "철수", last: "김", age: 20 }); // 에러: 인라인으로 작성했을 때, 에러를 발생 시킴.
const singer = { first: "철수", last: "김", age: 20 }; // 변수에 할당한 후 매개변수로 전달하면, 에러가 나지 않는다.
printName(singer);
