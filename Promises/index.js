
//Promise = object that encapsulates result of asynchronous operation
//let asynchronous methods return values like synchronous methods
//"I promise to return something in future"

//2 parts:Producing,Consuming

//statuses:pending,fulfilled,not fulfilled


console.log("general print statement 1");

function f1()
{
    return new Promise(function(resolve,reject){
        let error=false;
        console.log("came in f1 promise logic");
        if(error)
        {
            resolve("F1:error came")
        }
        else
        {
            reject("F1:error not came")
        }

    });
}
f1().then(function(val)
    {
        console.log("resolve function in form of then",val);
    }

).catch(function(val){
console.log("reject function in form of catch",val);
});

console.log("general print statement 2");








const d=new Promise(resolve => {
setTimeout(resolve,5000);//resolve can have parameters and then there will be 3rd,4th,.. parameter of setTimeout function also
//but in this case  we are not passing any parameter to resolve function and its respective then 
});
d.then(()=> console.log("Thanks for waiting"));








const p=new Promise((resolve,reject)=>{
    let fileloaded=true;
    console.log("came in p promise logic");

    if(fileloaded)
    {
        resolve("File Loaded");//"File Loaded" is the parameter and will be used in then of p
    }
    else
    {
        reject("File Not Loaded");//"File Not Loaded" is parameter & will be used in catch of p
    }
});



p.then (function(value){console.log("Resolve:"+value)})
.catch(value2 => console.log("Reject:"+value2) );


console.log("general print statement 3");




// f1().then(...).catch(...); is call to promise of f1 
// p.then (...).catch(...); is call to promise of p
 

//resolve and reject respective functions 'then' and 'catch' are executed at end of program 
//but at the end of the program resolves are executed first 

//but in case of setTimeout like in our code,resolve or reject is executed according to time given in parameter


// console output of that program

//general print statement 1
//came in f1 promise logic
//general print statement 2
//came in p promise logic
//general print statement 3
//Resolve:File Loaded
//reject function in form of catch F1:error not came
//Thanks for waiting      ->   That line of output is shown after 5 sec
