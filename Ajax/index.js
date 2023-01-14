//ajax is used in server code,when http request is made from browser on any button click,Server just refresh or provide required response 
//instead of refreshing full website,it basically decrease the latency rate

//Ajax stands for Asynchronous JavaScript And XML. Ajax loads the data from the server and updating the parts
// of a web page selectively without reloading the whole page.

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
     console.log('You have clicked the fetchBtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);//you can use any file or url from which data is required
    xhr.getResponseHeader('Content-type', 'application/json');


    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){//status is status code e.g.,429(Too many requests error),etc.

            console.log(this.responseText)//this.responseText is having response
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    params = `{"name":"test34sad545","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done!");

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);//you can use any file or url from which data is required


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){//status is status code e.g.,429(Too many requests error),etc.
            let obj = JSON.parse(this.responseText);//this.responseText is having response
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}