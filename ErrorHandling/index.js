//error= object with description of something went wrong
//error holds the execution of program
//we can gracefully handle the errors 
//IF WE USE TRY CATCH WHICH HELPS TO EXECUTES further lines of program part else try part in which error occured
//means execution of whole program will not stop

//error reasons:
//can't open file
//lose connection
//user types incorrect input
//type error(mistype something)
 

try{
console.lag()//error will occur and will be caught in catch block
 }
 catch(error)
 {
    console.log(error);
 }

 try{
let x=window.prompt("Enter a number");
//x=Numbe(x);//if this line executes,error will be occured and will be caught in catch block 
//and execution will continue from its catch block till end of program 
if(x==""){
    throw "That was empty";
    //executes a user defined error
   //as that throw is in try block so that user defined error will be caught in catch block 
   //and execution will continue from catch block and other lines of try block will be skipped
}
x=Number(x);
if(isNaN(x)==true)
{
//sometimes things go wrong but not executes error,so we can create user defined error according to our own requirements    
   throw "That was not a number!";//executes a user defined error
   //as that throw is in try block so that user defined error will be caught in catch block 
   //and execution will continue from catch block and other lines of try block will be skipped
}

console.log(`${x} is a number you entered`);//this line will be executed if no any error occured
}
 catch(error)
 {
    console.log("error is:",error);//this line will not be executed if no error occured
 }
 finally{
    console.log("This always executes!"); //its will be executed in any case
    //closing work of files is mostly done in this section    
 }
 console.log("End of program");