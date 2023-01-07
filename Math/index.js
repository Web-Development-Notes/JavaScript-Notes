//Math is an intrinsic object which provides basic mathematics functionalities and constants
let x=3.4;
x=Math.round(x);
//if point value is >4 then upper bound
//if point value is <=4 then lower bound

console.log(x);

x=3.6;
x=Math.floor(x);//lower bound
console.log(x);

x=3.6;
x=Math.ceil(x);//upper bound
console.log(x);

x=3;
x=Math.pow(x,3);//x=x*x*x
console.log(x);


x=15;
x=Math.sqrt(x);//square root of x
console.log(x);

x=-7;
x=Math.abs(x);//ignores any sign with the value
console.log(x);

let y=5;
let z=9;
let max=Math.max(x,y,z,1);
let min=Math.min(x,y,z,1,2);
console.log(max);
console.log(min);

x=Math.PI;//built in constant attribute PI of Math intrinsic Object
console.log(x);