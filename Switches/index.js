//Switches
let grade = "A";

switch(grade){
    case "A":
        console.log("Your grade is A");
        break;
    case "B":
        console.log("Your grade is B");
        break;
    case "C":
        console.log("Your grade is C");
        break;
    case "D":
        console.log("Your grade is D");
        break;
    default:
        console.log("Your grade is F");
}





//Conditional Statements 
let age = 65;

if(age >= 65){
    console.log("You are Senior!");
}
else if(age >= 18){
    console.log("You are an adult!");
}
else if(age <= 0){
    console.log("You haven't born yet!")
}
else{
    console.log("You are a child!");
}


//Switches
switch(true){
    case age >= 65:
        console.log("You are Senior!");
        break;
    case age >= 18:
        console.log("You are an adult!");
        break;
    case age <= 0:
        console.log("You haven't born yet!");
        break;
    default:
        console.log("You are a child!");
        break;
}

