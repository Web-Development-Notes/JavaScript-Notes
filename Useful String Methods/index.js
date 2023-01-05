let userName = "Mohsin Ali"
console.log("Name is: ",userName);

//Length of the String
console.log("Length of Mohsin Ali is: ", userName.length);

//Character at a specific index
console.log("Character at 0 index is: ", userName.charAt(0));

//Index of the specific character (First Occurrence)
console.log("Index of i (First Occurrence): ",userName.indexOf('i'));

//Index of the specific character (Last Occurrence)
console.log("Index of i (Last Occurrence): ",userName.lastIndexOf('i'));

//Trim the first spaces and last spaces
spacedName = "     Mohsin Ali     ";
trimmedName = spacedName.trim();
console.log(trimmedName);

//Convert to UPPERCASE
console.log("UPPERCASE of Mohsin Ali is: ", userName.toUpperCase());

//Convert to lowercase
console.log("lowercase of Mohsin Ali is: ", userName.toLowerCase());

//Replace All in the String
let cnic = "35201#122345#5";
console.log(cnic.replaceAll("#","-"));
