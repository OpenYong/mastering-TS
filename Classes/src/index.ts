// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private scroe: number = 0; // number를 지정해주지 않아도 되지만 명확하게 했다.

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;

//     this.privateMethod(); // Class 내부에서만 사용이 가능하다.
//   }

//   private privateMethod(): void {
//     console.log("프라이빗");
//   }
// }

class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  private privateMethod(): void {
    console.log("프라이빗");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newNumber: number) {
    if (newNumber < 0) {
      throw new Error("점수는 0보다 커야함");
    }
    this._score = newNumber;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 999999; // protected 멤버에 접근할 수 있다.
  }
}

const player1 = new Player("Yong", "LEE", 100);
player1.fullName;
player1.score;
// player1.scroe;
// player1.privateMethod();

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Phone implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print() {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const phone1 = new Phone("black");
const jacket1 = new Jacket("Gucci", "brown");

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("안녕");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const worker1 = new FullTimeEmployee("철수", "김", 200);
const worker2 = new PartTimeEmployee("수민", "김", 1, 150);
