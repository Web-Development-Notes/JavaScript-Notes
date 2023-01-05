let fullName = "Mohsin Ali";
console.log("Full Name is: ", fullName);

//Slicing by using index
let firstName = fullName.slice(0,6);
console.log("First Name: ",firstName);

let lastName = fullName.slice(7,10);
console.log("Last Name: ",lastName);

//Slicing by using indexOf(character)
firstName = fullName.slice(0,fullName.indexOf(" "));
console.log("First Name using indexOf(): ", firstName);

lastName = fullName.slice(fullName.indexOf(" "));
console.log("Last Name using indexOf(): ", lastName);