const boxes = document.querySelectorAll(".box");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

// const p1_name = document.querySelector("#player1_name");
// const p2_name = document.querySelector("#player2_name");

let choosen = [];
let last = "o";
let turn = 0;

// let p1, p2;
// let rand = opposite(getRand());


// window.onload = function() {

//     p1 = prompt("Type your Nickname");
//     p2 = prompt("Type your Nickname");


//     player1.textContent = `${p1} is ${rand}`;
//     player2.textContent = `${p2} is ${next(rand)}`;

// };


for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    box.addEventListener("click", () => {
        if (box.innerHTML == "x" || box.innerHTML == "o")
            console.log("This box's aldreay drawn", box.id);
        else {
            let tmp = next(last);

            box.classList += ` ${tmp}`;
            box.innerHTML = tmp;
            last = tmp;

            choosen.push(box.id);
            turn++;

            turn >= 5 ? check(choosen) : "";
        }
    });
}




function check() {
    
    const boxes = document.querySelectorAll(".box");

    if (boxes[0].innerHTML == 'x'&& 
        boxes[1].innerHTML == 'x'&& 
        boxes[2].innerHTML == 'x') win("x");
    if (boxes[3].innerHTML == 'x'&& 
        boxes[4].innerHTML == 'x'&& 
        boxes[5].innerHTML == 'x') win("x");
    if (boxes[6].innerHTML == 'x'&& 
        boxes[7].innerHTML == 'x'&& 
        boxes[8].innerHTML == 'x') win("x");
    
    if (boxes[0].innerHTML === 'o'&& 
        boxes[1].innerHTML === 'o'&& 
        boxes[2].innerHTML === 'o') win("o");
    if (boxes[3].innerHTML === 'o'&& 
        boxes[4].innerHTML === 'o'&& 
        boxes[5].innerHTML === 'o') win("o");
    if (boxes[6].innerHTML === 'o'&& 
        boxes[7].innerHTML === 'o'&& 
        boxes[8].innerHTML === 'o') win("o");


    // Diagonal
    if (boxes[0].innerHTML === 'x' &&
        boxes[4].innerHTML === 'x' &&
        boxes[8].innerHTML === 'x' ) win("x");
    if (boxes[2].innerHTML === 'x' &&
        boxes[4].innerHTML === 'x' &&
        boxes[6].innerHTML === 'x' ) win("x");

    if (boxes[0].innerHTML === 'o' &&
        boxes[4].innerHTML === 'o' &&
        boxes[8].innerHTML === 'o' ) win("o");
    if (boxes[2].innerHTML === 'o' &&
        boxes[4].innerHTML === 'o' &&
        boxes[6].innerHTML === 'o' ) win("o");


    // Vertical
    if (boxes[0].innerHTML === 'x'&& 
        boxes[3].innerHTML === 'x'&& 
        boxes[6].innerHTML === 'x') win("x");
    if (boxes[1].innerHTML === 'x'&& 
        boxes[4].innerHTML === 'x'&& 
        boxes[7].innerHTML === 'x') win("x");
    if (boxes[2].innerHTML === 'x'&& 
        boxes[5].innerHTML === 'x'&& 
        boxes[8].innerHTML === 'x') win("x");

    if (boxes[0].innerHTML === 'o'&& 
        boxes[3].innerHTML === 'o'&& 
        boxes[6].innerHTML === 'o') win("o");
    if (boxes[1].innerHTML === 'o'&& 
        boxes[4].innerHTML === 'o'&& 
        boxes[7].innerHTML === 'o') win("o");
    if (boxes[2].innerHTML === 'o'&& 
        boxes[5].innerHTML === 'o'&& 
        boxes[8].innerHTML === 'o') win("o");
}

function clear() {
    const boxes = document.querySelectorAll(".box");

    for (let i = 0; i < boxes.length; i++) {

        boxes[i].classList = "box";
        boxes[i].innerHTML = "";
    }
}


function win(sign) {
    last = "o";

    
    setTimeout(function() {
        alert(`${sign} won`);
        clear();

        // rand = opposite(getRand());
        // player1.textContent = `${p1} is ${rand}`;
        // player2.textContent = `${p2} is ${next(rand)}`;
    }, 300)

    

}


function next(last_sign) {
    if (last_sign === 'x') return 'o';
    else return 'x';
}


function getRand() {
    return ~~(Math.random() * 2) + 1;
}

function opposite(n) {
    return n === 1 ? "x" : "o";
}