document.getElementById("submitBtn").onclick = function(){
    if(document.getElementById("checkBoxInput").checked){
        console.log("You are Subscribed!");
    }
    else{
        console.log("You are NOT Subscribed!");
    }
}