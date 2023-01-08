let prices =[5,10,15,20];


for(let i=0;i<prices.length;i++)
{
    console.log(prices[i]);
}
//iterating backward
for(let i=prices.length-1;i>=0;i--)
{
    console.log(prices[i]);
}

for(let i of prices)
{
    console.log(i);//i is particular element of array in this type of iteration 
}