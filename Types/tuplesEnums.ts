// 43. Introducing Tuples
const myTuple: [number, string, number] = [123, "바보", 33];
// const myTuple2: [number, string] = [123, "바보", 33]; // 에러

// 44. A Bit More On Tuples
type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
// const goodRes2: HTTPResponse = ["OK", 200]; // 에러: 튜플의 순서가 바뀜.
// goodRes2[0] = "200"; // 에러: 타입이 맞지 않는다.
goodRes.push(123); // 예외적으로 튜플이 변수에 할당되고 나서 push를 하면 에러를 발생시키지 않음..

// 45. Introducing Enums
// Enum Example:
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// String Enum:
enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}
