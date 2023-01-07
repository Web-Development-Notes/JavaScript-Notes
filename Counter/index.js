let count=0;
document.getElementById("decreaseButton").onclick=function()
{
    count-=1;
    a=document.getElementById("alabel").innerText=count;
    
}
document.getElementById("increaseButton").onclick=function()
{
    count+=1;
    a=document.getElementById("alabel").innerText=count;
    
}
document.getElementById("resetButton").onclick=function()
{
    count=0;
    a=document.getElementById("alabel").innerText=count;
    
}