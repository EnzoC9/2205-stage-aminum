// initialisation jeu
let jeuEchecInit = [
    ["TN", "CN", "FN", "DR", "RN", "FN", "CN", "TN"],
    ["PN", "PN", "PN", "PN", "PN", "PN", "PN", "PN"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["PB", "PB", "PB", "PB", "PB", "PB", "PB", "PB",],
    ["TB", "CB", "FB", "DB", "RB", "FB", "CB", "TB"]
];


// jeu en cours
let jeuEchec = [
    ["TN", "CN", "FN", "DR", "RN", "FN", "CN", "TN"],
    ["PN", "PN", "PN", "PN", "PN", "PN", "PN", "PN"],
    ["", "", "", "", "", "", "", ""],
    ["", "tashi", "tashi", "tashi", "tashi", "tashi", "tashi", "tashi"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "PB", "", "", "", ""],
    ["PB", "PB", "PB", "", "PB", "PB", "PB", "PB",],
    ["TB", "CB", "FB", "DB", "RB", "FB", "CB", "TB"]
];
let indice = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
};
console.log(indice["a"]);

// Pour chaque case du jeuEchec afficher
// Afficher la valeur dans le bon td
// let num = parseInt("a");
// console.log(num);

// "A".charCodeAt(0);
// // String.fromCharCode(65,66,67);
// let codeDeA = "a".charCodeAt(0);
// console.log(codeDeA);
// let codeDeB = codeDeA + 1;
// console.log(codeDeB);
// let caractereB = String.fromCharCode(codeDeB);
// console.log(caractereB);


function afficheJeu(leJeuAAfficher) {
    console.log("afficheJeu");
    let caseActuelle;
    for (let ligne = 0; ligne < 8; ligne++) {


        for (let col = 0; col < 8; col++) {
            // console.log(col);
            // console.log(jeuEchec[ligne][col]);
            let codeLettre = "a".charCodeAt(0) + col;
            // console.log(codeLettre);
            let lettre = String.fromCharCode(codeLettre);
            // console.log(lettre);
            let ligneId = 8 - ligne;
            // console.log(ligneId);
            let caseId = lettre + ligneId;
            // console.log(caseId); 2
            caseActuelle = document.getElementById(caseId);
            caseActuelle.innerText = leJeuAAfficher[ligne][col];
        }
    }
}

// exemple d'appel mouvement("b2", "b3")
function mouvement(caseIdDepart, caseIdArrivee) {

    let cd = indice[caseIdDepart[0]];
    let ld = parseInt(caseIdDepart[1]);
    let ldTransfo = 8 - ld;

    let ca = indice[caseIdArrivee[0]];
    let la = parseInt(caseIdArrivee[1]);
    let laTransfo = 8 - la;

    jeuEchec[laTransfo][ca] = jeuEchec[ldTransfo][cd];
    jeuEchec[ldTransfo][cd] = "";

}
afficheJeu(jeuEchecInit);


let euuuuuuuuuhhhhhh = document.getElementById("btnInit");

euuuuuuuuuhhhhhh.addEventListener("click", clicBoutonInit);
function clicBoutonInit() {
    afficheJeu(jeuEchecInit);
}

let recherche = document.getElementById("search");
function rechercheCases(indice) {
    afficheJeu(indice);

}

let btnPlace = document.getElementById("btnPlace");

btnPlace.addEventListener("click", clicBoutonPlace);
function clicBoutonPlace() {
    afficheJeu(jeuEchec);
}




// Partie auto
setTimeout(function () {
    console.log("call 1 I am the third log after 5 seconds");
    mouvement("c2", "c4");
    afficheJeu(jeuEchec);

}, 3000);

setTimeout(function () {
    console.log("call 2 I am the third log after 5 seconds");
    mouvement("c2", "c3");
    afficheJeu(jeuEchec);

}, 6000);

setTimeout(function () {
    console.log("call 2 I am the third log after 5 seconds");
    mouvement("e2", "e4");
    afficheJeu(jeuEchec);

}, 8000);


setTimeout(function () {
    console.log("call 2 I am the third log after 5 seconds");
    mouvement("f2", "f3");
    afficheJeu(jeuEchec);

}, 10000);



