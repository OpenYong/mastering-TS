const activeUsers: string[] = ["Yong", "Lee"];
activeUsers.push("John");

const ageList: number[] = [33, 2123];
ageList[0] = 99;
// ageList[0] = "asdasd"; // 에러: number배열이기 때문에 오류

// 35. More Array Syntax
const bools: Array<boolean> = [];
const bools2: boolean[] = [];

type Point = {
  x: number;
  y: number;
};

// 커스텀 타입도 배열로 만들어 줄 수 있다.
const coords: Point[] = [];
coords.push({ x: 12, y: 31 });

// 36. Multidimensional Arrays
const board: string[][] = [
  ["a", "b", "c"],
  ["a", "b", "c"],
  ["a", "b", "c"],
];
