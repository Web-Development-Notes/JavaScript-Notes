//the idea behind module is that its a file of reusable code
//we can import sections of pre written code to use whenever we want
//they are great for any general utility values and functions
//help to make code more reusable & maintanable


import {PI,getCircumference,getArea} from "./math_util.js"
console.log(PI);
let cir=getCircumference(10);
console.log(cir);
let a=getArea(10)
console.log(a);


// OR WE can import and use things like following:
// import * as mUtil from "./math_util.js" 
// console.log(mUtil.PI);
// let cir=mUtil.getCircumference(10);
// console.log(cir);
// let a=mUtil.getArea(10)
// console.log(a);
