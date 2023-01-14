//cookie is used for storing user preferences ,user id's,etc. on client's browser ,its just like a small file 
//key = value; pairs



document.cookie="sid=2;rid2=345asd;"//rid2=345asd; will not be shown sid=2 will be shown
//to add another key=value you have to do in next line and passing key=value at first place
username=document.cookie.toString();
console.log(username);

let x1=window.prompt("id?");
let x2=window.prompt("val2?");
console.log(x1);
console.log(x2);
document.cookie=`${x1}=${x2};`;//adding another key=value in cookies



function setCookie(i,j,k)//add another key=value in cookies
{
    const d=new Date();
    d.setTime(d.getTime()+k*24*60*60*1000)//1000 milliseconds
    let expires="expires="+d.toUTCString();
    document.cookie=`${i}=${j};${expires}; path=/;`;//path and expires key values are optional which are not shown,only first key=value is shown when every time key=value is added in document.cookie
    
    //path=/; means that key=value will be available for every page on domain 
    //like website/firstPage,website/firstPage/firstSubPage,website/SecondPage,etc.
}
setCookie("email","spunch@gmail.com",365)//we want this email key for 365 days
username=document.cookie.toString();
console.log(username);

//delete cookies
document.cookie = "sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";//expires date should be a past date to del cookie it
username=document.cookie.toString();
console.log(username);

