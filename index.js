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

// creating an object

{
	const car = {
		type: "SUV",
		model: "Safari",
		company: "Tata",
		color: "Black",
	};
	console.log(car);
}

///////////////////

{
	const car = {};

	car.type = "SUV";
	car.model = "Safari";
	car.company = "Tata";
	car.color = "Black";

	console.log(car);
}

/////////////////////////

{
	const car = new Object({
		type: "SUV",
		model: "Safari",
		company: "Tata",
		color: "Black",
	});

	console.log(car);

	console.log(car["type"]);
	console.log(car.type);
}
var first_name = "Drum";
var last_name = "Karma";
//////////////////
{
	const user = new Object({
		first_name: "Piyush",
		last_name: "Ramje",
		full_name: function () {
			return first_name + " " + last_name;
		},
	});
	console.log(user.full_name());
}
/////////////////////////////

{
	const person = {
		name: "Piyush",
		age: 23,
		city: "Jabalpur",
	};
	let user = person;
	console.log(user);

	let pro = person.name + "," + person.age + "," + person.city;
	console.log(pro);
}

// constructor
///////////////////

// {
//     const obj= {
//         obj(val1, val2, val3){
//         name : val1;
//         age : val2;
//         city : val3;
//     }
//     }
//     let res = obj("Piyush", 21, "Jabalpur")
//     console.log(res)
// }

// constructors take 2
//////////////////////////
{
	function person(name, age) {
		this.name = name;
		this.age = age;
		this.greet = function () {
			console.log(`My name is ${name}`);
		};
	}
	const person1 = new person("Piyush", 21);
	const person2 = new person("Ayush", 18);

	console.log(person1);
	console.log(person2);
}

console.log("\n");
// ****************************************************************************************************

// Immutable Object Update in Javascript
// 1st method = spread operator

{
	const org = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
	};
	const copy = {
		...org,
		b: 6,
		d: 1,
	};
	console.log(org);
	console.log(copy);
}

// 2nd Method = assign cmmnd

{
	const original = { a: 2, b: 3, c: 4, d: 5 };
	const update = Object.assign({}, original, { b: 20, d: 40 });

	console.log(original);
	console.log(update);
}

console.log("\n");
// ****************************************************************************************************

// //Array Destructuring

//     let a, b, sum;
//     [a, b] = [10, 20];

//     console.log(a)
//     console.log(b)

//     [a, b, ...sum] = [1, 2, 3, 4, 5];

//     console.log(num)

// //

// const [a, b] = [10, 20, 30]
// console.log(a, b)

// const [a, , b] = [10, 20, 30]
// console.log(a, b)

// const[a, b, ...rest] = [10, 20, 30, 40, 50]
// console.log(a)
// console.log(b)
// console.log(rest)

// const [a = 19, b] = []
// console.log(a, b)

// const [a, b, ...[c, d]] = [1, 22, 3, 44, 5, 66, 7]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

{
	const [a, , b, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(a);
	console.log(b);
	console.log(rest);
}

// object destructuring

{
	const obj = { a: 1, b: 2, c: 3, d: 4 };
	const { a, b } = obj;
	console.log(a);
	console.log(b);
	console.log(a + b);
}

{
	const obj = { a: 1, b: 2, c: 3, d: 4 };
	const { a, b, ...rest } = obj;
	console.log(a);
	console.log(b);
	console.log(rest);
}
{
	const obj = { a: 1, b: 2, c: 3, d: 4 };
	const { ["a"]: val } = obj;
	console.log(val);
}

///different syntax

// const [a, b] = array;
// const [a, , b] = array;
// const [a = aDefault, b] = array;
// const [a, b, ...rest] = array;
// const [a, , b, ...rest] = array;
// const [a, b, ...{ pop, push }] = array;
// const [a, b, ...[c, d]] = array;

// const { a, b } = obj;
// const { a: a1, b: b1 } = obj;
// const { a: a1 = aDefault, b = bDefault } = obj;
// const { a, b, ...rest } = obj;
// const { a: a1, b: b1, ...rest } = obj;
// const { [key]: a } = obj;

console.log("\n");
// ****************************************************************************************************

// Arrays

// const arr = [1, 2, 3]

// const arr = []
// arr[0] = 1
// arr[1] = 2
// arr[3] = 3

// const arr = new Array(1, 2, 3)
// console.log(arr)

{
	const arr = [1, 2, 3, 4, 5, 6, 7, 8];
	console.log(arr.length); //size
	console.log(arr.toString()); //to string
	console.log(arr.at(3)); // access at any index
	console.log(arr[3]); //same as above
	console.log(arr.join(",")); //joins the array
	arr.pop();
	console.log(arr); // pops the last element
	arr.push(90);
	console.log(arr); // push the element into the array
	arr.shift();
	console.log(arr); // pop the first element
	arr.unshift(1);
	console.log(arr); // push in the front
}

console.log("\n");
// ****************************************************************************************************

// map function
{
	const arr = [81, 64, 49, 36, 25, 16];
	const new_arr = arr.map(Math.sqrt);
	console.log(new_arr);
}
{
	const arr = [1, 2, 3, 4];
	const mapped = arr.map((i) => i * 2);
	console.log(mapped);
}

console.log("\n");
// ****************************************************************************************************

//filter()

{
	const arr = [1, 2, 3, 4, 5, 6];
	const new_arr = arr.filter((i) => i % 2 == 0);
	console.log(new_arr);
}

{
	function check(num) {
		if (num > 10) return true;
		else false;
	}

	const arr = [1, 34, 5, 67, 89];
	const new_arr = arr.filter((i) => check(i));
	console.log(new_arr);
}

console.log("\n");
// ****************************************************************************************************

//reduce()

{
	const arr = [1, 2, 3, 4, 5, 6];
	const sum = arr.reduce((a, b) => a + b);
	console.log(sum);
}

{
	const get_max = (a, b) => Math.max(a, b);
	const res = get_max(2, 3);
	console.log(res);
	const arr = [1, 345, 56];
	console.log(arr.reduce(get_max));
}

{
	const arr = [23, 46, 76];

	const my_main = (total, num) => {
		return total + num;
	};
	const new_arr = arr.reduce(my_main);
	console.log(new_arr);
}

//****************************************************************************************************** */

// find()

{
	const arr = [1, 2, 3, 4, 5, 6, 7];
	const found = arr.find((i) => i > 3);
	console.log(found);
}

{
	const arr = [
		{ name: "piyush", age: 21 },
		{ name: "ayush", age: 22 },
		{ name: "mayush", age: 23 },
	];

	function solve(num) {
		return num.name === "mayush";
	}

	console.log(arr.find(solve));
}

////////////////////////////////////////////////////////////////////////////////////////////////

// ..rendering lists with map

// const listItems = people.map(person => <li>{person}</li>);

// ?????????????????////////////////////////////////////////////////////////////////////////////

/// keys in react lists

// const products = [
//   { id: 1, name: 'Laptop' },
//   { id: 2, name: 'Smartphone' },
// ];

// const ProductList = () => {
//   return (
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>{product.name}</li>
//       ))}
//     </ul>
//   );
// };

////////////////////////////////////////////////////////////////////////////////////////////////////

// destructuring in function parameters

{
	const emp = ["piyush", "video-editor", 21];

	function solve([, post, age]) {
		console.log(`Hi I am ${post} and I am ${age} years old!!`);
	}
	solve(emp);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// copying arrays using spread
{
	const arr = [1, 2, 3, 4, 5];
	const new_arr = [...arr];
	new_arr.push(6);
	console.log(arr);
	console.log(new_arr);

	///////////////////////////

	const naya_arr = arr;
	naya_arr.push(6);
	console.log(arr);
	console.log(naya_arr);
}

/////////////////////////////////////////////////////

// copying object using spread

{
	const obj = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
	};
	const new_obj = { ...obj };

	new_obj.e = 5;
	console.log(obj);
	console.log(new_obj);

	////////////////////////////////

	const naya_obj = obj;

	naya_obj.e = 5;
	console.log(obj);
	console.log(naya_obj);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//changing immutable updates
{
	const obj = {
		a: 1,
		b: 2,
		c: 3,
		d: 4,
	};

	const new_obj = {
		...obj,
		b: 4,
		d: 890,
	};

	console.log(obj);
	console.log(new_obj);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//rest parameters in functions

{
	function sum(...val) {
		let total = 0;
		for (const i of val) {
			total += i;
		}
		return total;
	}

	console.log(sum(1, 2, 3));
	console.log(sum(1, 2, 3, 4));
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//ternary operators in jsx// helps in conditional rendering

// {
//     <h1>
//         {isTrue ? Correct : Wrong}
//     </h1>
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// conditional rendering using &&

// return (
//     <>
//         x === 1 && <div>Hello</div>
//         x === 2 && <div>Byee</div>
//     </>
// )

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import in js
// {
// import { add } from "./add.js";
// let res = add(2, 3)
// console.log(res)
// }

// {
// import { naam, age } from "./add.js";
// console.log(naam)
// console.log(age)
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// default export and import

// import multiply from "./add.js"
// console.log(multiply(3, 4));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SetTimeOut

{
	console.log("Hey,");
	setTimeout(() => {
		console.log("you!!");
	}, 0);
	console.log("How");
	console.log("are");
}
{
	setTimeout(() => {
		console.log("Piyush");
	}, 0);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//setinterval

{
	// setInterval(() => {console.log("Helloo Duniyaaa")}, 1000)
}

{
	// let count = 1;
	// function dom (){
	//     if(count > 4)
	//     {
	//         clearInterval(num)
	//     }
	//     count++;
	//     console.log("Piyush!!")
	// }
	// const num = setInterval(()=>{dom()}, 1000)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Promises
{
	// const demo = new Promise(
	//     (myResolve, myReject) => {
	//         let result = true;
	//         if(result == true)
	//             myResolve("OK")
	//         if(result == false)
	//             myResolve("Error")
	//     }
	// )
}

///////////FETCH USAGE FOR API CALL!!

{
	const api_url = "https://dummyjson.com/users";

	fetch(api_url)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		})
		.then((jsonData) => {
			console.log("fetched data: ", jsonData);
		})
		.catch((error) => {
			console.error("There was a problem with a fetch operation:", error);
		});
}
////take 2
{
	const api_url = "https://dummyjson.com/products";

	fetch(api_url)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		})
		.then((jsonData) => {
			console.log("fetched Data: ", jsonData);
		})
		.catch((error) => {
			console.error("I fail bro cant handle this shiii: ", error);
		});
}
//.take 3

{
	const api_url = "https://dummyjson.com/comments";

	fetch(api_url)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP Error Status : ${response.status}`);
			}
			return response.json()           
		 })
		.then((jsonDATA) => {
			console.log(`Fetched Data is : `, jsonDATA);
		})
		.catch((error) => {
			console.error(`There is some error in the Response:`, error);
		});
}

///////////////////////////

// SOME MORE EXAMPLE OF PROMISES

{
	const myPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			const random_num = Math.random();
			if (random_num > 0.5) {
				resolve("data has been succesfully retrieved");
			} else {
				reject("data is not retrieving successfully");
			}
		}, 1000);
	});

	myPromise
		.then((data) => {
			// console.log(data);
		})
		.catch((error) => {
			// console.error(error);
		});
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// async/await

{
	async function fetchData() {
		try {
			const response = await fetch("https://dummyjson.com/carts");
			const data = await response.json();
			console.log("data: ", data);
		} catch (error) {
			console.error(`Here is some Problem : ${error.message}`);
		}
	}

	fetchData();
}

/////////////////
//take 2

{
	const fetchData = async () => {
		try {
			const response = await fetch("https://dummyjson.com/carts");
			const dat = await response.json();
			console.log("My DATA cart : ", dat);
		} catch (error) {
			console.error("Here is the error", error.message);
		}
	};

	fetchData();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/// AXIOS CALL API FETCH if

// {
//     axios.get("https://dummyjson.com/carts")
//     .then((resolve) => {console.log(response.data)})
//     .catch((error) => {console.error{error.message}})
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
    const obj = {
        a : 1,
        b : 2,
        c : 3
    }

    const new_obj = Object.freeze(obj)

    new_obj.a = 34
    console.log(obj)
    console.log(new_obj)
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

