//Date Object is used to work with dates & times
let date=new Date();
//if there is no any parameter passed in Date Constructor then it creates current dateTime
console.log(date);
date=date.toLocaleString();//making dateTime more readable
console.log(date);
document.getElementById("2").innerHTML=date; 


//if parameter of Date constructor is one
//then that parameter is time in milliseconds to create datetime after specific milliseconds of very first datetime in the history
let initialDate=new Date(0);//very first date/time in history
console.log(initialDate);
let anotherDate=new Date(10000000);
console.log(anotherDate);

//if parameter of Date Constructor is more than one,then:
//first parameter is year number
//2nd is month no starting from 0(january)
//3rd is day no of month starting
//4th is hour no of day
//5th is minute no of hour
//6th is second no of minute
//7th is mili second of second

let date2=new Date(2023,0,20,7,35,20)
console.log(date2);

//another way to create date is passing string parameter in Date Constructor like below:
let date3=new Date("January 1, 2023 00:00:00");
console.log(date3);

date3=new Date();

//you can get different parts of that date object
let y=date3.getFullYear();
let m=date3.getMonth();//starting from 0(January)
let dayOfMonth=date3.getDate();//starting from 1
let dayOfWeek=date3.getDay();//starting from 0(Sunday)
let h=date3.getHours();//0-23
let min=date3.getMinutes();
let s=date3.getSeconds();
let miliSec=date3.getMilliseconds();

console.log("date3 current dateTime is:",date3);



let date4=new Date();
//you can set different parts of that date object
date4.setFullYear(2025);
date4.setMonth(1);//starting from 0(January)
date4.setDate(3);//starting from 1
date4.setHours(23);//0-23
date4.setMinutes(30);
date4.setSeconds(30);
date4.setMilliseconds(200);

console.log(date4);




if(true)
{
    setTimeout(f1,5000);//date3 will have 5 seconds incresed from previous date3 datetime
}
function f1()
{
    date3=new Date();//save latest dateTime in date3 object
    console.log("Now date3 current dateTime is:",date3);
}

function formatDate(d)
{
    let a=d.getFullYear();
    let b=d.getMonth()+1;
    let c=d.getDate();
    return `${b}/${c}/${a}`;
}
date=new Date();
document.getElementById("2").innerHTML=formatDate(date);


function formatTime(d)
{
    let a=d.getHours();
    let b=d.getMinutes();
    let c=d.getSeconds();
    let amOrPm =a>=12?"pm":"am"
   
        a=a%12||12;//time hours will always be in form of 0-11,but when left side of or operator becomes false or 0 
        //then right side will be used to make expression true
        //so for 0, value 12 will be saved in a
        //for every other case,right side of or operator will not be used  

    return `${a}:${b}:${c} ${amOrPm}`;
}
console.log(formatTime(date4));
