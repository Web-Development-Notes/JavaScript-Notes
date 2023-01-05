document.getElementById("submitBtn").onclick = function(){
    if(document.getElementById("visaRadio").checked){
        console.log("You selected Visa Card!");
    }
    else if(document.getElementById("payPalRadio").checked){
        console.log("You selected PayPal!");
    }
    else if(document.getElementById("masterRadio").checked){
        console.log("You selected Master Card!");
    }
    else{
        console.log("You haven't selected any payment method yet!");
    }
}