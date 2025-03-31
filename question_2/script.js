DisplayTime = document.getElementById("display");


    const date =  new Date()
    let hour = date.getHours();
    let minute = date.getMinutes();
    let day = date.getDate()
    let month = date.getMonth()

DisplayTime.innerHTML = `${month} ${day}  ${hour}:${minute}`
