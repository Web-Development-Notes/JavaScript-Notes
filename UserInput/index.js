//how to accept user input?
//easy way:window prompt
//difficult way:html textBox  



// let username=window.prompt("whats your name?");
// console.log(username);


let username;
document.getElementById("2").onclick=function()
{
    username=document.getElementById("1").value;
    console.log(username);
    document.getElementById("0").innerText=username;
}