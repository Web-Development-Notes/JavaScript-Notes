//async makes a function return a promise


// following commented work can also be done using async
// function loadFile()
// {
//     let fileLoaded=false;
//     if(fileLoaded)
//     {
//         return Promise.resolve("File Loaded");
//     }
//     else
//     {
//         return Promise.reject("File Not Loaded");
//     }
// }
// loadFile().then(value => console.log(value))
// .catch(value2 => console.log(value2));



async function loadFile()
{
    let fileLoaded=true;
    if(fileLoaded)
    {
        return "File Loaded";
    }
    else
    {
        throw "File Not Loaded";
    }
}
loadFile().then(value => console.log(value))
.catch(value2 => console.log(value2));