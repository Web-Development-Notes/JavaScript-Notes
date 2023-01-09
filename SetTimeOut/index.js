//setTimeout(), execute a function after a number of milliseconds
let item="cryptoCurrency";
let price=500;
let a=setTimeout(firstMessage,3000,price,item);//setTimeout function syntax for parameterized firstMessage(aa,bb) fun,
// parameterized firstMessage function will be called after the 3 seconds from the start of execution of program
let b=setTimeout(secondMessage,10000);
//secondMessage function will be called after 10 seconds from the start of execution of program
let c=setTimeout(thirdMessage,10000);
//thirdMessage function will be called after 10 seconds from the start of execution of program

//secondMessage and thirdMessage function both will be called on same time
//which is after 10 seconds from the start of execution of program
//but ,first, secondMessage will be called and then thirdMessage will be called

function firstMessage(aa,bb)
{
    alert(`Buy this ${bb} for ${aa}!`);
}
function secondMessage()
{
    alert(`This is not a scam!`);
}
function thirdMessage()
{
    alert(`ThirdMessage!`);
}
document.getElementById("2").onclick=function(){
    //a,b,c are the id's of timeout returned from setTimeout() function
    clearTimeout(a);//a timeout will be removed,it will not be called now
    clearTimeout(b);//b timeout will be removed,it will not be called now
    clearTimeout(c);//c timeout will be removed,it will not be called now
    alert("Thanks for buying!");

}