//hypotenuse of right angled Triangle ,practice problem
let a
let b
let c

//window prompt way!
// a=window.prompt("Enter side A");
// a=Number(a);
// b=window.prompt("Enter side B");
// b=Number(b);
// c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
// console.log("Side c:",c);



//html page way 
document.getElementById("submitButton").onclick=function()
{
    a=document.getElementById("atext").value;
    b=document.getElementById("btext").value;
    a=Number(a);
    b=Number(b);
    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("clabel").innerText="Sidec: "+c;
}