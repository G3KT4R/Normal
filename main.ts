console.log("--------First exercise--------");
const map = <T>(e: T): T => {
  return e;
};
const arr: number[] = [100, 150, 200, 250];
const newArr: string[] = arr.map((e) => e + " р");
console.log(newArr);
console.log("--------END--------\n");

console.log("--------Second exercise--------");
const users: [
  [string, number],
  [string, number],
  [string, number],
  [string, number],
] = [
  ["alex", 32],
  ["tomas", 17],
  ["olga", 14],
  ["andre", 24],
];
users.forEach((element) => {
  if (element[1] > 18) console.log(element);
});

// oldUsers = users.filter((element) => element[1] > 18);
// oldUsers.forEach((element) => {
//   console.log(element);
// });
console.log("--------END--------\n");

console.log("--------Third exercise--------");

const products = [
  { title: "пицца", price: 200 },
  { title: "баранина", price: 300 },
  { title: "креветки", price: 400 },
];
const sum: number = products.reduce((acc, product) => {
  return acc + product.price;
}, 0);
console.log(`Sum = ${sum}`);
console.log("--------END--------");
