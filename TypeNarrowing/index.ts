// 106. Typeof Narrowing:
function triple(age: string | number) {
  if (typeof age === "string") {
    return age.repeat(3);
  }
  return age * 3;
}

// 107. Truthiness Guards
const el = document.getElementById("idk");
if (el) {
  el;
} else {
  el;
}

// 107. Truthiness Narrowing:
const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    // word가 반드시 undefined가 되는 것이 아니다.
    // 빈 문자열도 false가 될 수 있음.
    console.log("매개변수를 전달하지 않았음!");
  }
};
