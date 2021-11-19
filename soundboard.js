
function playchampagne() {
    document.getElementById("champagnesound").play();

}
function playcough() {
    document.getElementById("coughsound").play();
}

function playwind() {
    document.getElementById("windsound").play();
}

function playblip() {
    document.getElementById("blipsound").play()
}

let champagnebutton = document.getElementById("champagne");
let coughbutton = document.getElementById("cough");
let windbutton = document.getElementById("wind");

champagnebutton.onmouseenter = function () {
    playblip();
}

champagnebutton.onclick = function () {
    playchampagne();
}

coughbutton.onmouseenter = function () {
    playblip();
}

coughbutton.onclick = function () {
    playcough();
}

windbutton.onmouseenter = function () {
    playblip();
}

windbutton.onclick = function () {
    playwind();
}

