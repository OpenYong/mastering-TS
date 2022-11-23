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

