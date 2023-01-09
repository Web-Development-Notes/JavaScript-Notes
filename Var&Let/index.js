//variable scope?
//let --->> limited to block scope
//var --->> limited to a function (){} 

//global variable--->>outside the functions and accessed anywhere

let name="Bro";//global variable(it should not be as var because it can then mess browser window variable values also)
for (let i=0;i<3;i++)
{
    console.log(i);
}
//console.log(i);//here i is not accessible

aFunction();
function aFunction()
{
    for (var j=0;j<3;j++)
    {
        console.log(j);
    }
    console.log(j);//here j is accessible
    
}
console.log(j);//here j is not accessible
