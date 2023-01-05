let userName = "   Mohsin Ali   ";

//Without Chaining of Methods
let indexOfM = userName.indexOf('M');
let letter = userName.charAt(indexOfM);
letter = letter.toLowerCase();
console.log("Mohsin's 'M' in lowercase without Chaining of methods is: ",letter);

//With Chaining of Methods
let letterM = userName.charAt(indexOfM).toLowerCase();
console.log("Mohsin's 'M' in lowercase with Chaining of methods is: ",letterM);