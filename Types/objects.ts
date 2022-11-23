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

// 28. Creating Type Aliases
type Point = {
  x: number;
  y: number;
};

function doublePoint(point: Point): Point {
  return { x: point.x, y: point.y };
}

// 29. Nested Objects
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calcPayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song) {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

console.log(calcPayout(mySong));
printSong(mySong);
