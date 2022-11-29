class Player {
  // 타입스크립트에서는 클래스의 프로퍼티 타입을 지정해주어야한다.
  // 다른 방법도 있음.
  first: string;
  last: string;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const player1 = new Player("Yong", "LEE");
