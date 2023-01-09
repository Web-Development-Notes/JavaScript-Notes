const myLabel=document.getElementById("0");
update();
setInterval(update,1000);

function update()
{
    let date=new Date();
    myLabel.innerHTML=formatTime(date);
}
function formatTime(date)
{
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();
       
        let amOrPm = hours>=12? "pm":"am";
        hours=(hours%12)||12;//to convert hours from 0-23 to 1-12
        return `${formatZero(hours)}:${formatZero(minutes)}:${formatZero(seconds)} ${amOrPm}`;
}
function formatZero(t)
{
    t=t.toString();
    return t.length<2? "0"+t:t;
}