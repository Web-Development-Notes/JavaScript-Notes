//variable is container for storing data
//variable name or declaration should be descriptive and meaningful
// Two steps:
// 1. Declaration(let,var,const)
// 2. Assignment(= assignment operator)
//if you declare variable but not give or assign any value to it
//it remains undefined



let firstname="Brother"//string value(string can be in single or double quotation)
let age;
age=10;//numeric value
let present=false//boolean value

console.log("Hello",firstname)//comma creates a single space
console.log("You are",age,'years old');
console.log("Present:",present);

document.getElementById("p1").innerHTML="Hello "+firstname;
document.getElementById("p2").innerHTML="You are "+age+' years old';
document.getElementById("p3").innerHTML="You are "+present;

