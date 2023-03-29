console.log("Hi");

const cat = document.querySelector('#cat')

let leftPosition = 0;
let CatStart;

function catWalk() {
    const animationCat = () => {
        leftPosition += 10;
        cat.style.left = leftPosition + "px";
        cat.style.transform = "none"
    }
    CatStart = setInterval(animationCat, 50)
}

function pause() {
    clearInterval(CatStart)
}

function turn() {
    cat.style.transform = "scaleX(-1)"
    const animationCat = () => {
        leftPosition -= 10;
        cat.style.left = leftPosition + "px";
    }
    CatStart = setInterval(animationCat, 50)
}

function catSpeed() {
    const animationCat = () => {
        leftPosition += 10;
        cat.style.left = leftPosition + "px";
    }
    CatStart = setInterval(animationCat, 10)
}

function moonWalk() {
    cat.style.transform = "scaleX(-1)"
    const animationCat = () => {
        leftPosition += 10;
        cat.style.left = leftPosition + "px";
    }
    CatStart = setInterval(animationCat, 50)
} 