//type conversion=change data type of value into another datatype
//string,number,boolean(TypesOfData)

let age=window.prompt("How old are you?");
age+=1;
console.log("You are ",age,"years old");
//i was trying to make increment of 1 in my age
// but 1 attached at the end of the age taken from the user input by window prompt 
//because window prompt returns value in string type
//so when you add number to string,it just concatenates it with the string

//you can convert string to number by using number constructor


let age1=window.prompt("Again, How old are you?");
//to get the data type of variable you can do like following :

console.log(typeof age1);
age1=Number(age1);//datatype conversion(String to number)
console.log(typeof age1);

age1+=1;
//now increment of 1 will be done at age1 numeric value,as value of age1 is not string now
console.log("Now You are ",age1,"years old");

let x
let y
let z
//conversion into number
x=Number("3.12")
console.log(x,typeof x)
if(typeof x=="number")
{
    console.log("yes,data type is number,not Number");
}
//conversion into string
y=String(3.12)
console.log(y,typeof y)
if(typeof y=="string")
{
    console.log("yes,data type is string,not String");
}
//conversion into boolean
//Boolean constructor is useful when checking whether user has entered any input or not
//Boolean constructor returns true if there is any defined value or defined variable of any type in parameter
// or if there is string but is not null 

z=Boolean("asdfgh")
console.log(z,typeof z)
z=Boolean(1)
console.log(z,typeof z)

//Boolean constructor returns false if there is no any parameter of any type
// or if there is string but is null
// or if there is any undefined variable or undefined value inside parameters
z=Boolean("")
console.log(z,typeof z)
z=Boolean()
console.log(z,typeof z)
let xy
z=Boolean(xy)
console.log(z,typeof z)

let ans=Number("pizza")
console.log(ans,typeof ans)
//if you want to convert a string into a number ,where string value is not a numeric number
//it returns NaN
// means Not a Number and its datatype is number