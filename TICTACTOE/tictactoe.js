let all = document.querySelector("td");
let jeuMorpion = [" 1", "2", "3", "4 ", "", "", "", "", "",];
let joueurX = "X";
let victioire = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.querySelectorAll(".case").forEach(cellules =>
    cellules.addEventListener("click", boutonclic));

function boutonclic(){
    console.log(this);
    
};