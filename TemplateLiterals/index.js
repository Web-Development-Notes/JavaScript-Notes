

let username="Bro";
let items=3;
let total=75;

// console.log("Hello",username);
// console.log("You have",items,"items");
// console.log("Your total is $ ",total);

//Template Literals allow embedded variables and expressions

console.log(`Hello ${username}`);
console.log(`You have ${items} items`);
console.log(`Your total is $ ${total}`);


let text=`
Hello ${username}<br>
You have ${items} items<br>
Your total is $ ${total}<br>
`;

console.log(text);

document.getElementById("0").innerHTML=text;
