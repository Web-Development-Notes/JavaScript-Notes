//setInterval() invokes a function repeatedly after a number of milli seconds

let count=0;

let max=window.prompt("Count upto what number?");
max=Number(max);

const myTimer=setInterval(countUp,1000,max);//FOR PARAMETERIZED FUNCTION(countUp)
//setInterval function returns an id of that interval 


//first parameter is the function on which you want to add interval
//2nd parameter is the interval time in milliseconds
//3rd is parameter is for the parameter of countUp function

function countUp(m)
{
    count+=1;
    console.log(count);
    if(count>=m)
    {
        clearInterval(myTimer);//stopping further repeatedly calling of countUp function or removing interval
    }
}
let counter=0;
const myTimer2=setInterval(funB,1000);//FOR NON PARAMETERIZED FUNCTION(funB)
//first parameter is the function on which you want to add interval
//2nd parameter is the interval time in milliseconds

function funB()
{
    counter+=1;
    console.log(counter+"!");
    if(counter==10)
    {
        clearInterval(myTimer2);
    }
}


//countUp & funB both will be called on same time repeatedly as both have 1 second time interval 
//but first, countUp and then funB ,will be REPEATEDLY called 
//and their interval will be cleared according to their independent separate logics/checks  

