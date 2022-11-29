class Player {
  public readonly first: string;
  public readonly last: string;
  private scroe: number = 0; // number를 지정해주지 않아도 되지만 명확하게 했다.

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;

    this.privateMethod(); // Class 내부에서만 사용이 가능하다.
  }

  private privateMethod(): void {
    console.log("프라이빗");
  }
}

const player1 = new Player("Yong", "LEE");
player1.scroe; // private에 바로 접근할 수 없다.
player1.privateMethod(); // private에 바로 접근할 수 없다.
