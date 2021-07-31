function displayTime()
{
    const currentDate =  new Date();
    const currentTime = document.querySelector("#current-time");
    const currentDate1 = document.querySelector("#today-date");
    currentTime.innerText = currentDate.toLocaleTimeString("en-US",{
        hour: "numeric",
        hour12: true,
        minute: "numeric",
        second: "numeric",
    });
    currentDate1.innerText = currentDate.toDateString();
}
setInterval(displayTime, 1000);
