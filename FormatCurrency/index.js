//toLocaleString()=returns string with language sensitive representation of this number

//number.toLocaleString(Locale,{option});

// locale=specify language(by default :undefined)
// options=formatting options


let myNum;
myNum=123456.789;
// myNum=myNum.toLocaleString("en-US")//US English
// console.log(myNum);

// myNum=myNum.toLocaleString("hi-IN")//Hindi
// console.log(myNum);

// myNum=myNum.toLocaleString("de-DE")//Standard German
// console.log(myNum);

// myNum=myNum.toLocaleString("en-US",{style: "currency",currency:"USD"});
// console.log(myNum);

// myNum=myNum.toLocaleString("hi-IN",{style: "currency",currency:"INR"});
// console.log(myNum);

// myNum=myNum.toLocaleString("de-DE",{style: "currency",currency:"EUR"});
// console.log(myNum);

// myNum=myNum.toLocaleString(undefined,{style: "percent"});
// console.log(myNum);


// myNum=myNum.toLocaleString(undefined,{style: "unit",unit:"celsius"});
// console.log(myNum);

myNum=myNum.toLocaleString(undefined,{style: "unit",unit:"kilometer"});
console.log(myNum);
