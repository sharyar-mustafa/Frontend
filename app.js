let inputdir = { x: 0, y: 0 };
let speed = 2;
let lastpaintTime = 0;
let score = 0
let snakeArr = [
    { x: 9, y: 11 }
]
food = { x: 2, y: 5 };
// game function

function main(ctime) {
    window, requestAnimationFrame(main);
    // console.log(main);
    if ((ctime - lastpaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastpaintTime = ctime

    gameEngine();
}

function isCollide(sarr) {
    return false;
}

function gameEngine() {


    // p2 updating the snake arry and food 
    if (isCollide(snakeArr)) {
        inputdir = { x: 0, y: 0 };
        alert("game over .press any key to play thr game ");
        snakeArr = [{ x: 9, y: 11 }];
        score = 0;

    }

    // if you have eating the food incerment the score & regeneratr food

    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        snakeArr.unshift({ x: snakeArr[0].x + inputdir.x, y: snakeArr[0].y + inputdir.y });
        let a = 2;
        let b = 14;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    // moving the sank 

    for (let i = snakeArr.length -2; i>= 0; i--) {
        snakeArr[i + 1] ={...snakeArr[i]};

    }

    snakeArr[0].x += inputdir.x;
    snakeArr[0].y += inputdir.y;

    // p1 Disply the snack and food

    // disply snack
    board.innerHtml = "";
    snakeArr.forEach((e, index) => {
        snackElement = document.createElement("div");
        snackElement.style.gridRowStart = e.y;
        snackElement.style.gridColumnStart = e.x;

        if (index === 0) {
            snackElement.classList.add("head");
        }
        else {
            snackElement.classList.add("snack");
        }
        board.appendChild(snackElement);
    });

    // disply food 
    foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food")
    board.appendChild(foodElement);


}



// main logic 

window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputdir = { x: 0, y: 1 }    //start the game 
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp")
            inputdir.x = 0;
            inputdir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown")
            inputdir.x = 0;
            inputdir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft")
            inputdir.x = -1;
            inputdir.y = 0;
            break;


        case "ArrowRight":
            console.log("ArrowRight")
            inputdir.x = 1;
            inputdir.y = 0;
            break;
        default:
            break;
    }
});