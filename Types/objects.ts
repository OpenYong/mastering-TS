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
