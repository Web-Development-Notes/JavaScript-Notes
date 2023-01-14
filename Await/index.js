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
        let message=await loadFile();//await tells control to skip function further part,and run all code except than function in which await is used
        //when await wait is completed and response came,then run from here that function ,after running whole code of program
        console.log(message);
    }
    catch(e)
    {
        console.log(e);
    }
}
f1();