// let fruits = [
//   "apple",
//   "pear",
//   "orange",
//   "banana",
//   "peach",
//   "watermelon",
//   "grape",
//   "apple",
//   "pear",
//   "orange",
//   "banana",
//   "peach",
//   "watermelon",
//   "grape",
// ];

// // .push()
// // გამოიყენება მასივში ერთი ან მეტი ელემენტის დასამატებლათ.
// // იგი ცვლის მასივს და ამატებს ახალ ელემენტებს

// fruits.push("kiwi", "mango");

// // .pop()
// // ეს მეთოდი გამოიყენება მასივში ბოლო ელემენტის წასაშლელად

// fruits.pop;

// console.log(fruits.length);

// // for(let i = 0; i < fruits.length - 5; i++) {
// //   fruits.pop
// // }

// console.log(fruits);

// // .shift()
// // ეს მეთოდი შლის პირველ ელემენტს მასივიდან და გადააქვს ყველა დარჩენილი ელემენტი ქვედა ინდექსზე
// // fruits.shift();

// // .unshift()
// // ეს მეთოდი ამატებს ერთ ან მეტ ელემენტს მასივის დასაწყისში და არსებულ ელემენტებს ემატებათ ინდექსი
// // fruits.unshift("plane")

// for (let i = 0; i < fruits.length; i++) {
//   document.write(`<p>${fruits[i]}</p>`);
// }

// // მრავალგანზომილებიანი მასივი
// // ეს არის მასივი, რომელიც შეიცავს სხვა მასივებს, როგორც მის ელემენტებს.

// let matrix = [
//   [1, 2, [3, 3.14]], //index 0
//   [4, 5, 6], //index 1
//   [7, 8, 9], //index 2
// ];

// console.log(matrix[0][2][1]);

// let numbers = [
//   4, 1, 4, 1, 6, 32, 4, 512, 6, 7, 8, 2, 2, 546, 5, 1, 35, 135, 13, 35, 135, 3,
//   3, 2, 1, 2, 3,
// ];

// console.log(
//   numbers.sort(function (a, b) {
//     return a - b;
//   })
// );

// OBJECTS
let car = {
  brand: "BMW",
  model: "X6",
  date: 2009,
  price: 40000,
  color: "Black",
  engine: 4.2,
  fullInfo: function() {

    return (
      "ამ მანქანის ბრენდი არის " +
      this.brand +
      "ეს არის მისი მოდელი " + 
      this.model + 
      "ხოლო ეს არის თარიღი " + 
      this.date
    );
  },
};

console.log(car.date, car.price, car.color);

document.getElementById("brand").innerHTML = car.brand
document.getElementById("model").innerHTML = car.model
document.getElementById("date").innerHTML = car.date
document.getElementById("price").innerHTML = car.price
document.getElementById("color").innerHTML = car.color
document.getElementById("engine").innerHTML = car.engine
document.getElementById("fullInfo").innerHTML = car.fullInfo();