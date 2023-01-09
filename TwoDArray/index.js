//2dArray=An array Of Arrays
let fruits =["apples","oranges","bananas"];
let vegetables =["carrots","onions","potatoes"];
let meats =["eggs","chicken","fish"];

let groceryList=[fruits,vegetables,meats];
groceryList[2][2]="steak";


for(let i of groceryList)
{
    for (let j of i)
    {
        console.log(j);
    }
}
