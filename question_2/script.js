DisplayTime = document.getElementById("display");


    const date =  new Date()
    let hour = date.getHours();
    let minute = date.getMinutes()
     let day = date.getDate()        //toLocaleString("default",{day: "short"});
    let month = date.toLocaleString("default", {month: "short"});

DisplayTime.innerHTML = `${month} ${day}  ${hour}:${minute}`
