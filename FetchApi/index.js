//instead of ajax,Fetch is used nowdays for api's requests and responses



document.body.style.backgroundColor="skyblue";

console.log('This is my tutorial');



function getData(inputIs){
    console.log("Started getData")
    url = `https://goweather.herokuapp.com/weather/${inputIs}`;//after last forward slash,is the city name whose weather you want to know
    fetch(url).then((response)=>{
        console.log("Inside first then")
        return response.text();
    }).then((data)=>{
        console.log("Inside second then")
        document.getElementById("22").innerHTML=JSON.stringify(data);
    })
}

// function getData(){
//     console.log("Started getData")
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }


function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harglry347485945","salary":"123","age":"23"}'
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(ans=> {console.log(ans)}
    )
}

// console.log("Before running getData")


document.getElementById("2").onclick=function()
{
    let a=document.getElementById("exampleInputEmail1").value;
    getData(a)//handling weather api in this function
}
// console.log("After running getData")
//postData()