// 48. Introducing Interfaces
// 타입별칭과 매우 비슷하다. 인터페이스와의 차이점은 조금 있다가 정리할 것.
interface Point {
  x: number;
  y: number;
}

const pt: Point = {
  x: 123,
  y: 321,
};

// 49. Readonly and Optional Interface Properties
// interface Person {
//   readonly id: number;
//   first: string;
//   last: string;
//   nickname?: string;
// }

// const yong: Person = {
//   first: "Yong",
//   last: "Lee",
//   nickname: "Superman",
//   id: 1234,
// };

// yong.first = "John";
// yong.id = 1111; // 에러: readonly 수식어 때문에 수정할 수 없다.

// 50. Interface Methods
interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  //   sayHi: () => string; // string을 반환하는 함수
  sayHi(): string; // 두번째 방법
}

const yong: Person = {
  first: "Yong",
  last: "Lee",
  nickname: "Superman",
  id: 1234,
  sayHi: () => {
    return "Hello!";
  },
};

// 51. Interface Method Parameters
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "운동화",
  price: 99000,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes);
console.log(shoes.applyDiscount(0.3));

