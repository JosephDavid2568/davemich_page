const time = document.getElementById("time");



function setTime(settime) {
    const date = new Date()

    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    if (hours<10) hours = '0' + hours;
    if (mins<10) mins = '0' + mins;
    if (secs<10) secs = '0' + secs;

    settime.innerText =  `${hours}:${mins}:${secs}`;
}

window.setInterval(() => {
    setTime(time);
}, 1000)