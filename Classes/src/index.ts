class Player {
  public readonly first: string;
  public readonly last: string;
  public scroe: number = 0; // number를 지정해주지 않아도 되지만 명확하게 했다.

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const player1 = new Player("Yong", "LEE");
player1.last;
