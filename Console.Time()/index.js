//console.time() starts a timer you can use to track time an operation takes
//give each timer a unique name

//start
console.time("ResponseTime");


alert("Click ok Button");

//end
console.timeEnd("ResponseTime");//stop timer and it will print time between start and end of ResponseTime timer





function f1()
{
//start another timer
console.time("ResponseTime2");

setTimeout(() => console.log("hi"),5000);

//end
console.timeEnd("ResponseTime2");//stop timer and it will print time between start and end of ResponseTime2 timer


}

f1();