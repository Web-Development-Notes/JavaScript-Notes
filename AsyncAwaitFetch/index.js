//async function basically returns the promise
//await says to control to skip the function from line where await is called and run the remaining functions and code except that function 
//when all code is executed ,then control comes to await,and if await needs more time then control waits
//and then when await time is completed,that line is executed and further lines of that function are executed,
//also if another await is also present,then control comes to it and execute that line when its wait is completed
//Overall,when all lines in async function are executed,it then return reponse of promise

//another then statment is executed then,for doing something on response of that promise

console.log("This is start");

async function hey(){
    console.log('Inside hey function');
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;
}

console.log("Before calling hey")
let a = hey();
console.log("After calling hey")
console.log(a);
a.then(data => console.log(data))//that 'then' will be executed when response of promise come from async function 
console.log("Last line of this js file")