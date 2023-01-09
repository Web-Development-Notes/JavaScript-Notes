
//return= function returns a value back to the place from where it is called

let area;
let width;
let height;
width=window.prompt("Enter width");
height=window.prompt("Enter height");
area=getArea(width,height);

 console.log("The area is",area);
 function getArea(w,h)
 {
     return w*h;
 }
 