//const=variable whose value can't be changed 
//we can prevent a variable's value from changing after first time assigning the constant value 
//it's good practice to use all caps on variable name for constants

//let PI=3.14159
const PI=3.14159
let radius=window.prompt("Enter radius! ");
radius=Number(radius);
//PI=4;
//(when a const value changes ,error will occur due to const)
let circumference=2*PI*radius;
console.log("The circumference is:",circumference);