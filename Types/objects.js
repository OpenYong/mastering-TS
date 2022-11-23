// 25. Working With Object Types
// Objects as parameters:
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "철수", last: "김" });
// 26. More Object Types
var coordinate = { x: 34, y: 99 };
// 함수의 반환 타입도 객체로 설정해줄 수 있다.
function randomCoordinate() {
    return { x: Math.random(), y: 99 };
}
// 27. Excess Properties
printName({ first: "철수", last: "김", age: 20 }); // 에러: 인라인으로 작성했을 때, 에러를 발생 시킴.
var singer = { first: "철수", last: "김", age: 20 }; // 변수에 할당한 후 매개변수로 전달하면, 에러가 나지 않는다.
printName(singer);
function doublePoint(point) {
    return { x: point.x, y: point.y };
}
function calcPayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
console.log(calcPayout(mySong));
printSong(mySong);
