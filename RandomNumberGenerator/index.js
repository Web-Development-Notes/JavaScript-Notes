//let x=Math.random()*6;(rand number between 0 and 5)
document.getElementById("rollButton").onclick=function()
{
    let x=Math.floor(Math.random()*6)+1;//generate rand number from 1 to 6 ,in rounded form,not in decimal points
    let y=Math.floor(Math.random()*6)+1;//generate rand number from 1 to 6 ,in rounded form,not in decimal points
    let z=Math.floor(Math.random()*6)+1;//generate rand number from 1 to 6 ,in rounded form,not in decimal points
    document.getElementById("xlabel").innerHTML=x;
    document.getElementById("ylabel").innerHTML=y;
    document.getElementById("zlabel").innerHTML=z;
}