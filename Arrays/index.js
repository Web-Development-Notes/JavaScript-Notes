//array=variable which can store multiple values
let fruits =["apple","orange","banana"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
//console.log(fruits[3]);(undefined)
fruits[2]="coconut";
console.log(fruits);
fruits.push("lemon");//adds at last
console.log(fruits);
fruits.pop();//removes last element
console.log(fruits);
fruits.unshift("mango");//adds element to beginning
console.log(fruits);
fruits.shift();//removes element from beginning
console.log(fruits);
let length=fruits.length;//will return 3
console.log(length);
let i=fruits.indexOf("apple");//returns index ,if searched,like in this case it will return 0 
console.log(i);
let j=fruits.indexOf("apple2");//will return -1 as not present in array
console.log(j);