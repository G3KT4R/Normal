console.log("--------First exercise--------");
var map = function (e) {
  return e;
};
var arr = [100, 150, 200, 250];
var newArr = arr.map(function (e) {
  return e + " р";
});
console.log(newArr);
console.log("--------END--------\n");
console.log("--------Second exercise--------");
var users = [
  ["alex", 32],
  ["tomas", 17],
  ["olga", 14],
  ["andre", 24],
];
users.forEach(function (element) {
  if (element[1] > 18) console.log(element);
});
// oldUsers = users.filter((element) => element[1] > 18);
// oldUsers.forEach((element) => {
//   console.log(element);
// });
console.log("--------END--------\n");
console.log("--------Third exercise--------");
var products = [
  { title: "пицца", price: 200 },
  { title: "баранина", price: 300 },
  { title: "креветки", price: 400 },
];
var sum = products.reduce(function (acc, product) {
  return acc + product.price;
}, 0);
console.log("Sum = ".concat(sum));
console.log("--------END--------");
