
// AND Logical Operator
let temp = 20;
let sunny = true;
if(temp >= 0 && temp <= 30 && sunny){
    console.log("Temprature is good!");
}
else{
    console.log("Temprature is bad!");
}

// OR Logical Operator
temp = 50;
if(temp < 0 || temp > 30){
    console.log("Temprature is bad!");
}
else{
    console.log("Temprature is good!");
}

// ! Not Operator
temp = 30;
if(!(temp < 0)){
    console.log("It's Warm Outside!");
}
else{
    console.log("It's Cold Outside!");
}