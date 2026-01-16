//slice
{
	const arr = [1, 2, 3, 4, 5, 6];
	const new_arr = arr.slice(0, 3);
	console.log(arr);
	console.log(new_arr);
}
//splice
{
	const arr = [1, 2, 3, 4, 5, 6];
	const new_arr = arr.splice(0, 3);
	console.log(arr);
	console.log(new_arr);
}
//some
{
	const arr = [12, 45, 6, 68, 89, 36];
	console.log(arr.some(check));
	function check(age) {
		return age > 90;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function callbacks
// functions passed as an arguments to another function is called callback functions

{
	function greet(name, callback) {
		console.log("Hello how are you ", name);
		callback();
	}
	function sayBye() {
		console.log("Bye Bye!!");
	}
	function sayThankyou() {
		console.log("Thank you");
	}

	greet("Ajay", sayBye);
	greet("Piyush", sayThankyou);
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//optional chaining

{
	const obj = {
		a : 1,
		b : {
			name : "dina"
		}
	}

	const dog_name = obj.b?.name
	console.log(dog_name)
}

// In Regular Chaining - when ever encounter with null or undefined it throws type error
// In Optional Chaining - when ever encounter with null or undefined it does not throws type error it just return undefined


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///Nullish coalescing (??)


{
	const num1 = null ?? 43
	const num2 = 0 ?? 43
	console.log(num1)
	console.log(num2)
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// this keyword normal vs arrow function
var a = "Shivank"
var b = "Singh"
{
	const obj = {
		a : "Piyush",
		b : "Ramje",
		c : () => {
			console.log(this.a + " " + this.b)
		}
	}
	obj.c()
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//template literals 	
{
	const num = 1
	console.log(`Line number 1
		Line number 2`)
}


