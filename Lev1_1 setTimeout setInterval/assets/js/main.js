console.log("Start Warten für 3 Sekunden");

setTimeout(() => {
    console.log("Erledigt. Du hast 3 Sekunden verschwendet")
}, 3000)


let counter = 10;
let countDown = setInterval(function () {
    console.log(counter);
    counter--
    if (counter === 0) {
        console.log("Endlich Feierabend!!");
        clearInterval(countDown)
    }
}, 1000);

