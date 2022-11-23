let movieTitle: string = "Batman";
movieTitle = "Arrival";
// movieTitle = 9; // TS 오류
movieTitle.toUpperCase();

let myAge: number = 10;
myAge += 1;
// myAge = "열한살"; // TS 오류

let gameOver: boolean = false;
// gameOver = "true"; // TS 오류

// Type Inference
let myPhone = "아이폰";
myPhone = "갤럭시";
myPhone = 51; // myPhone 을 string 타입으로 추론하고 있기 때문에 에러

// the 'any' type
let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();

const movies = ["Arrival", "Batman", "Avatar"];
// let foundMovie: string;
let foundMovie;

for (let movie of movies) {
  if (movie === "Batman") {
    foundMovie = "Batman";
  }
}

foundMovie(); // foundMovie가 암묵적으로 any가 때문에 TS가 에러를 발생시키지 않음.
foundMovie = 1;
foundMovie.asdasd();

// 암묵적으로 any type이 될 수 있는 경우가 있다.
// 변수만 선언이 되었을 경우 any로 type 지정이 되는데,
// 이 경우에 TS가 개발자의 의도에 맞게 에러를 발생시키 못하기 때문에 주의가 필요하다.
