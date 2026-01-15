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

// ****************************************************************************************************

// function declaration

{
	function demo(value) {
		return "Hi I am " + value;
	}

	const res = demo("Piyush");
	console.log(res);
}

// ****************************************************************************************************

// function expression

{
	const demo = function (value) {
		return `Hi my name is ${value}`;
	};

	const res = demo("Sahil");
	console.log(res);
}

// ****************************************************************************************************

// arrow function expression
{
	// const result = demo("drum")
	// console.log(res)       shows refrence error

	const demo = (val) => {
		return `Hi ${val}, What do you do?`;
	};

	const res = demo(`Piyush`);
	console.log(res);
}

// ****************************************************************************************************

// function callback

{
	const arr = [15, 145, 12, 45];
	arr.forEach(function (val) {
		console.log(val);
	});
}

// ****************************************************************************************************

// function callback with arrow functions

{
	const arr = [15, 26, 35, 78, 691];
	arr.forEach((val) => console.log(val));
}

console.log("\n");
// ****************************************************************************************************

//parameters
{
	function multiply(a, b) {
		return a * b;
	}
	console.log(multiply(9, 8));
}

console.log("\n");
// ****************************************************************************************************

//default parameters
{
	const multiply = (a = 9, b = 1) => {
		return a * b;
	};
	const num1 = multiply();
	const num2 = multiply(5);
	const num3 = multiply(undefined, 2);

	console.log(num1);
	console.log(num2);
	console.log(num3);
}

console.log("\n");
// ****************************************************************************************************

//return values?

{
	function NoReturn() {
		return;
	}
	console.log(NoReturn());
}
console.log("\n");

// return value
{
	const dummy = (name) => {
		return `Hello ${name}!!`;
	};
	let mssg = dummy("Piyush");
	console.log(mssg);
}
console.log("\n");

// returning objects and functions
{
	const demo = (val1, val2) => {
		const obj = {
			name: val1,
			age: val2,
		};
		return obj;
	};
	const res = demo("Piyush", 34);
	console.log(res);
}
{
	const demo = (val1, val2) => {
		const obj = (val1, val2) => {
			return val1 * val2;
		};
		return obj;
	};
	const res = demo("Piyush", 34);
	console.log(res);
}

console.log("\n");
// ****************************************************************************************************

//returning function with recursions

{
	const factorial = (val) => {
		return val < 2 ? 1 : val * factorial(val - 1);
	};
	const res = factorial(5);
	console.log(res);
}

console.log("\n");
// ****************************************************************************************************

//Functions as a React Component!!

// {
//     function App() {
//         const greeting = "Hello, How are you."

//         return <>Hello World </>
//     }
// }

console.log("\n");
// ****************************************************************************************************

//Arrow Functins in react

// {
//     const App = ({val}) => {
//         return <h1>Hello World!</h1>
//     }
// }

console.log("\n");
// ****************************************************************************************************

//Hoisting in var

// {
// 	console.log(a);

// 	var a = 23;
// }

// {
// 	console.log(a);

// 	let a = 23;
// }

// {
// 	console.log(a);

// 	const a = 23;
// }


console.log("\n");
// ****************************************************************************************************


// {
//     var x = 9
//     var y = 8
//     console.log(x + " " + y)
// }
// {
//     var x = 9
//     console.log(x + " " + y)
//     var y = 10
// }


console.log("\n");
// ****************************************************************************************************


