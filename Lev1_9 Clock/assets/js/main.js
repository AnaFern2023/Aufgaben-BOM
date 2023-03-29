console.log("Hiiiii");

const text = document.getElementById('txt')

let startTime = () => {

    let date = new Date
    let heute = date.toLocaleDateString() + "<br>";
    let std = date.getHours() + " : ";
    let min = date.getMinutes() + " : ";
    let sec = date.getSeconds();
    text.innerHTML = `${heute}${std}${min}${sec}`
    setInterval(startTime, 1000);
}

startTime()
