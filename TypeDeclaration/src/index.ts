import axios from "axios";
// node_modules/axios/index.d.ts 파일에 ts 관련 코드가 정의되어 있다.
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

axios
  .get<User>("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    const { data } = res;
    printUser(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

// axios
//   .get<User[]>("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     res.data.forEach(() => printUser);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}
