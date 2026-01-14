// const b = 100;
// // b = 100
// console.log(b)

// console.log(a)
// {
//     var a = 10;
// // }
// var a = 90
// if(false) {
//     a = 10;
//     console.log(a)
// }
// else
// {
//     a = 35
// }
// console.log(a)

// {
//     var a = 90
//     let r = 8
//     const b = 78
//     console.log(r)
//     console.log(b)
// }
// console.log(a)

// const c = 10;
// function x(){
//     const c = 300
//     console.log(c)
// }
// x()
// console.log(c)

// let c = 10;
// function x(){
//     var c = 90;
//     console.log(c)
// }
// x()
// console.log(c)

// //reassignment
// let a = 90;
// console.log(a)
// a = 8
// console.log(a)

// example of reassignment
// let user = {
//     name : "Piyush",
//     age : 90
// }
// console.log(user)
// user = {
//     name : "DrumKarma",
//     age : 91
// }
// console.log(user)

//example of mutation
// const user = {
//     name : "DrumKarma",
//     age : 91
// }
// console.log(user)
// user.name = "Piyush"
// user.age = 89
// console.log(user)

// let a = 9
// console.log(typeof(a));
// a = "Piyush"
// console.log(typeof(a));
// a = true
// console.log(typeof(a));

// const a = 90;
// console.log(typeof(a));
// const res = a + "2"
// console.log(res)
// console.log(typeof(res));

// //numeric
// const a = 90
// console.log(a)
// console.log(typeof(a))

// // String
// const a = "Drummm"
// console.log(a)
// console.log(typeof(a))

// Boolean
// const a = true
// console.log(a)
// console.log(typeof(a))

// objects
// const a = {
//     name : "Piyush",
//     age : 90
// }
// console.log(a)
// console.log(typeof(a))

// //arrays
// const a = [30, 45, 60, 75, 89, 91];
// console.log(a)
// console.log(typeof(a))

// FUnctions:
// function square(num) {
//     var math = num * num
//     return math
// }
// console.log(square(9))

// //functions
// function solve(obj) {
// 	obj.name = "DrumKarma";
// }

// const user = {
// 	name: "Piyush",
// 	age: 78,
// };

// console.log(user);
// solve(user);
// console.log(user);

//functions
// function a(arr)
// {
//     arr[0] = 90
// }
// const arr = [21, 31, 41]

// console.log(arr)
// a(arr)
// console.log(arr)

// //function ke andar function
// function add(num1, num2)
// {
//     function square(a)
//     {
//         return a * a
//     }
//     return square(num1) + square(num2)
// }
// const tub = add(2,8)
// console.log(tub)

//functions recursions
// const factorial = function (n) {
// 	return n < 2 ? n : n * factorial(n - 1);
// };
// console.log(factorial(5));

//date
// const n = new Date();
// console.log(n)

// let obj = {
//     name : "Piyush",
//     age : 56
// }
// let obj_new = obj
// obj.age = 45
// console.log(obj)
// console.log(obj_new)

//ternary operators
// const age = 10;
// const drink = age > 21 ? "Beer" : "Orange Juice"
// console.log(drink)

// //ternary chains
// const age = 26
// const drink = 
//     age > 50 ?  "khichdi":
//     age > 30 ? "Whiski":
//     age > 21 ? "Beer":
//     "Orange Juice";
// console.log(drink)

// spread operator
// const name = (x, y, z, w) => {
//     return x + y + z + w
// }
// const arr = [1, 2, 3, 4]
// const res = name(...arr)
// console.log(res)

// const obj = {...7, ..."piyush ramje"};
// console.log(obj)

// function x() {
//     var a = 7;
//     function y(){
//         console.log(a)
//     }
//     y()
//     a = 100
//     y()
//     return y;
// }
// var z = x();
// console.log(z)

// function z() {
//     var b = 90
//     function x() {
//         var a = 7
//         function y() {
//             console.log(a,b)
//         }
//         y()
//     }
//     x()
// }
// z()

//kal ab