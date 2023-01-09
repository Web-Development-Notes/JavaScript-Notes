let temp=32;
temp=toCelsius(temp);
console.log(temp)
temp=32;
temp=toFahrenheit(temp);
console.log(temp)



function toCelsius(t){
    return (t-32)*(5/9);
}
function toFahrenheit(t){
    return t*9/5+32; 

}
document.getElementById("submitButton").onclick=function()
{
    console.log("aya");
    let temp;
    if(document.getElementById("3").checked==true)
    {
            temp=document.getElementById("1").value;
            temp=Number(temp);
            temp=toCelsius(temp);
            document.getElementById("7").innerHTML=temp+"C";
    }
    else
    {
        if(document.getElementById("5").checked==true){
            temp=document.getElementById("1").value;
            temp=Number(temp);
            temp=toFahrenheit(temp);
            document.getElementById("7").innerHTML=temp+"f";
        }
        else
        {
            document.getElementById("7").innerHTML="Select a unit";
        }
    }

}