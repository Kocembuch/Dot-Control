const circle = document.querySelector(".circle");
const info = document.querySelector(".info");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const color = document.querySelector(".color")


const move = (e) => {
    console.log(e.keyCode);

    info.textContent = `Actual dot position:
    x: ${circle.offsetLeft}, 
    y: ${circle.offsetTop}`

    switch (e.keyCode) {
        case 37:
            circle.style.left = circle.offsetLeft - 4 + "px";
            left.style.animation = "shine .1s linear 1";
            setTimeout(() => {
                left.style.animation = "";
            }, 150);
            break;
        case 38:
            circle.style.top = circle.offsetTop - 4 + "px";
            up.style.animation = "shine .1s linear 1";
            setTimeout(() => {
                up.style.animation = "";
            }, 150);
            break;
        case 39:
            circle.style.left = circle.offsetLeft + 4 + "px";
            right.style.animation = "shine .1s linear 1";
            setTimeout(() => {
                right.style.animation = "";
            }, 150);
            break;
        case 40:
            circle.style.top = circle.offsetTop + 4 + "px";
            down.style.animation = "shine .1s linear 1";
            setTimeout(() => {
                down.style.animation = "";
            }, 150);
            break;
        case 32:
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            circle.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            color.textContent = `Actual dot color: rgb(${red}, ${green}, ${blue})`
            break;
    }
}

window.addEventListener("keydown", move);