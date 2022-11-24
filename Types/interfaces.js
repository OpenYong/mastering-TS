var pt = {
    x: 123,
    y: 321
};
var yong = {
    first: "Yong",
    last: "Lee",
    nickname: "Superman",
    id: 1234,
    sayHi: function () {
        return "Hello!";
    }
};
var shoes = {
    name: "운동화",
    price: 99000,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes);
console.log(shoes.applyDiscount(0.3));
console.log(shoes);
