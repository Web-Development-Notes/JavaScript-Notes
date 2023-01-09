//await makes an async function wait for Promise
async function loadFile()
{
    let fileLoaded =true;
    if(fileLoaded)
    {
        return "File Loaded";
    }
    else
    {
        throw "File Not Loaded";
    }

}
async function f1()
{
    try{
        let message=await loadFile();
        console.log(message);
    }
    catch(e)
    {
        console.log(e);
    }
}
f1();