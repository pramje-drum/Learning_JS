// //slice
// {
// 	const arr = [1, 2, 3, 4, 5, 6];
// 	const new_arr = arr.slice(0, 3);
// 	console.log(arr);
// 	console.log(new_arr);
// }
// //splice
// {
// 	const arr = [1, 2, 3, 4, 5, 6];
// 	const new_arr = arr.splice(0, 3);
// 	console.log(arr);
// 	console.log(new_arr);
// }
// //some
// {
// 	const arr = [12, 45, 6, 68, 89, 36];
// 	console.log(arr.some(check));
// 	function check(age) {
// 		return age > 90;
// 	}
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // function callbacks
// // functions passed as an arguments to another function is called callback functions

// {
// 	function greet(name, callback) {
// 		console.log("Hello how are you ", name);
// 		callback();
// 	}
// 	function sayBye() {
// 		console.log("Bye Bye!!");
// 	}
// 	function sayThankyou() {
// 		console.log("Thank you");
// 	}

// 	greet("Ajay", sayBye);
// 	greet("Piyush", sayThankyou);
// }

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //optional chaining

// {
// 	const obj = {
// 		a : 1,
// 		b : {
// 			name : "dina"
// 		}
// 	}

// 	const dog_name = obj.b?.name
// 	console.log(dog_name)
// }

// // In Regular Chaining - when ever encounter with null or undefined it throws type error
// // In Optional Chaining - when ever encounter with null or undefined it does not throws type error it just return undefined

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///Nullish coalescing (??)

// {
// 	const num1 = null ?? 43
// 	const num2 = 0 ?? 43
// 	console.log(num1)
// 	console.log(num2)
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // this keyword normal vs arrow function
// var a = "Shivank"
// var b = "Singh"
// {
// 	const obj = {
// 		a : "Piyush",
// 		b : "Ramje",
// 		c : () => {
// 			console.log(this.a + " " + this.b)
// 		}
// 	}
// 	obj.c()
// }

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //template literals
// {
// 	const num = 1
// 	console.log(`Line number 1
// 		Line number 2`)
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let mydiv = document.querySelector('#fdiv')
// console.log(mydiv)
// let div = document.createElement("h1")
// div.textContent = "Hi How are you i am Piyush"
// mydiv.insertAdjacentElement("afterbegin", div)

// ???????????????????????????????????????//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let mydiv = document.querySelector('#fdiv')
// let child = document.querySelector('#dare')
// mydiv.removeChild(child)

// ???????????????????????????????????????//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let mydiv = document.getElementById("spara")
// spara.style.back

// ???????????????????????????????????????//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function change() {
// 	let mydiv = document.querySelector("#fpara");
// 	mydiv.textContent = "This is the first para";
// }

// let fpara = document.getElementById("fpara");
// fpara.addEventListener("click", change);

// ???????????????????????????????????????//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function handle(event){
// 	event.preventDefault();
// 	let mydiv = document.querySelector('a')
// 	mydiv.textContent = "Click Done Already!!"
// }

// let mydiv = document.querySelector('a')
// mydiv.addEventListener('click', handle)

// ???????????????????????????????????????//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let paras = document.querySelectorAll("p");

// function logic(event) {
// 	if(event.target.nodeName === 'SPAN')
// 	{
// 	alert("You have Clicked on para no. "+ event.target.textContent);}
// }

// for (let i = 0; i < paras.length; i++) {
// 	let para = paras[i];
// 	para.addEventListener("click", logic);
// }

// ???????????????????????????????????????//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const title = document.querySelector('#heading_text')
// console.log(title)

// title.style.color = 'red'

// const list_items = document.querySelectorAll('#movie_lists')

// for(let i = 0; i < list_items.length; i++)
// {
// 	list_items[i].style.fontSize = "30px";
// }
// console.log(list_items)

// const ul = document.querySelectorAll('ul')
// const li = document.createElement('li')

// // ul.append(li)
// // li.textContent = "Maddock Horror Universe"

// for(let i = 0; i < ul.length; i++)
// {
// 	ul[i].style.fontSize = '50px'
// }

// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroudColor = "blue";


// console.log(ul.children)
// console.log(ul.firstElementChild)
// console.log(ul.lastElementChild)


// let ul = document.querySelector("#unordered_lists");
// console.log(ul)