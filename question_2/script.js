DisplayTime = document.getElementById("display");

function gettTime(){
    const date =  new Date()
    let hour = date.getHours();
    let minute = date.getMinutes();
    let day = date.getDate();
    let month = date.getMonth()

}
setInterval(gettTime,10000)
gettTime();

DisplayTime.innerHTML = `${month} ${day}  ${hour}:${minute}`
