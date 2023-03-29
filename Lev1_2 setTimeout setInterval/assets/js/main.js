console.log("HiHo");

const startButton = document.querySelector('#btn');
let zeit = document.querySelector('.zeit')

let counter = 100;
function start() {
    let countDown = setInterval(function () {
        zeit.innerHTML = counter + "%"
        console.log(counter);
        counter--
        if (counter === -1) {
            clearInterval(countDown)
        }
    }, 100);
}

