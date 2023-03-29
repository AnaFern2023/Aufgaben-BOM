console.log("Heeellloooooo");

let message = document.querySelector('.message');
const count = document.getElementById('count');


let counter = 10;

let countDown = setInterval(function () {
    count.innerHTML = counter
    // console.log(counter);
    counter--
    if (counter === -1) {
        clearInterval(countDown)
        message.style.transition = "all 0.5s ease";
        message.style.display = "none";

    }
}, 1000);
