//Synchronous code   ->ordered sequence(Step by Step linear instructions)

//Asynchronous code  ->Out of order or sequence
//For Example:
//Access database,
//Fetch File,
//Tasks which take time,etc.

//these two lines are synchronous as they will execute according to order
console.log("Start");
console.log("End");

setTimeout(() => console.log("asynchronous"),7000);//it will execute according to time as setTimeout() fun is asynchronous fun  
//not according to order of program statements

