let jeuEchec = [
    ["TN", "CN", "FN", "DR", "RN", "FN", "CN", "TN"],
    ["PN", "PN", "PN", "PN", "PN", "PN", "PN", "PN"],
    ["", "", "", "", "", "", "", ""],
    ["tashi", "tashi", "tashi", "tashi", "tashi", "tashi", "tashi", "tashi"],
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
let num = parseInt("a");
console.log(num);

"A".charCodeAt(0);
// String.fromCharCode(65,66,67);
let codeDeA = "a".charCodeAt(0);
console.log(codeDeA);
let codeDeB = codeDeA + 1;
console.log(codeDeB);
let caractereB = String.fromCharCode(codeDeB);
console.log(caractereB);


function afficheJeu() {
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
            caseActuelle.innerText = jeuEchec[ligne][col];
        }
    }
}
// exemple d'appel mouvement("b2", "b3")
function mouvement(caseIdDepart, caseIdArrivee) {

    console.log(caseIdDepart);
    console.log(caseIdArrivee);

    // Traitement de la case départ
    console.log(caseIdDepart[0]);
    console.log(caseIdDepart[1]);

    // b2 => [6] [1]
    // colonne b en html =>  colonne 1 dans jeuEchec
    // ligne 2 en html => ligne 6 dans jeuEchec

    let cd = indice[caseIdDepart[0]];
    console.log("Valeur pour la colonne en utilisant l'indice " + cd);

    let ld = parseInt(caseIdDepart[1]);
    let ldTransfo = 8 - ld;
    console.log("ld = " + ld);
    console.log("Valeur pour la ligne en utilisant 8 -z " + ldTransfo);

    // Traitement case d'arrivée

    // b3 => [5][1]
    let ca = indice[caseIdArrivee[0]];
    let la = parseInt(caseIdArrivee[1]);
    let laTransfo = 8 - la;

    jeuEchec[laTransfo][ca] = jeuEchec[ldTransfo][cd];
    jeuEchec[ldTransfo][cd] = "";


}
afficheJeu();
setTimeout(function(){
    console.log("call 1 I am the third log after 5 seconds");
    mouvement("b2", "b4");
    afficheJeu();

},3000);

setTimeout(function(){
    console.log("call 2 I am the third log after 5 seconds");
    mouvement("c2", "c3");
    afficheJeu();

},6000);

setTimeout(function(){
    console.log("call 2 I am the third log after 5 seconds");
    mouvement("e2", "e4");
    afficheJeu();

},8000);


setTimeout(function(){
    console.log("call 2 I am the third log after 5 seconds");
    mouvement("f2", "f3");
    afficheJeu();

},10000);

//  jeuEchec = [
// 0 //     ["TN", "CN", "FN", "DR", "RN", "FN", "CN", "TN"],
// 1 //     ["PN", "PN", "PN", "PN", "PN", "PN", "PN", "PN"],
// 2 //     ["", "", "", "", "", "", "", ""],
// 3 //     ["tashi", "tashi", "tashi", "tashi", "tashi", "tashi", "tashi", "tashi"],
// 4 //     ["", "", "", "", "", "", "", ""],
// 5 //     ["", "PB", "", "PB", "", "", "", ""],
// 6 //     ["PB", "", "PB", "", "PB", "PB", "PB", "PB",],
// 7 //     ["TB", "CB", "FB", "DB", "RB", "FB", "CB", "TB"]
     // ["a", "b","c","d","e","f","g","h"]
     //   0    1    2  3   4   5   6   7
// ];


// let caseActuelle = document.getElementById("a8");
// caseActuelle.innerText = jeuEchec[0][0];
// caseActuelle = document.getElementById("b8");
// caseActuelle.innerText = jeuEchec[0][1];
// caseActuelle = document.getElementById("c8");
// caseActuelle.innerText = jeuEchec[0][2];
// caseActuelle = document.getElementById("d8");
// caseActuelle.innerText = jeuEchec[0][3];
// caseActuelle = document.getElementById("e8");
// caseActuelle.innerText = jeuEchec[0][4];
// caseActuelle = document.getElementById("f8");
// caseActuelle.innerText = jeuEchec[0][5];
// caseActuelle = document.getElementById("g8");
// caseActuelle.innerText = jeuEchec[0][6];
// caseActuelle = document.getElementById("h8");
// caseActuelle.innerText = jeuEchec[0][7];

// let case_1 = document.getElementById("td1");
// case_1.innerText = jeuEchec[0][0];

// let case_2 = document.getElementById("td2");
// case_2.innerText = jeuEchec[0][1];

// let case_3 = document.getElementById("td3");
// case_3.innerText = jeuEchec[0][2];

// let case_4 = document.getElementById("td4");
// case_4.innerText = jeuEchec[0][3];

// let case_5 = document.getElementById("td5");
// case_5.innerText = jeuEchec[0][4];

// let case_6 = document.getElementById("td6");
// case_6.innerText = jeuEchec[0][5];

// let case_7 = document.getElementById("td7");
// case_7.innerText = jeuEchec[0][6];

// let case_8 = document.getElementById("td8");
// case_8.innerText = jeuEchec[0][7];

// let case_9 = document.getElementById("td9");
// case_9.innerText = jeuEchec[1][0];

// let case_10 = document.getElementById("td10");
// case_10.innerText = jeuEchec[1][1];

// let case_11 = document.getElementById("td11");
// case_11.innerText = jeuEchec[1][2];

// let case_12 = document.getElementById("td12");
// case_12.innerText = jeuEchec[1][3];

// let case_13 = document.getElementById("td13");
// case_13.innerText = jeuEchec[1][4];

// let case_14 = document.getElementById("td14");
// case_14.innerText = jeuEchec[1][5];

// let case_15 = document.getElementById("td15");
// case_15.innerText = jeuEchec[1][6];

// let case_16 = document.getElementById("td16");
// case_16.innerText = jeuEchec[1][7];

// let case_17 = document.getElementById("td50");
// case_17.innerText = jeuEchec[7][1];

// let case_18 = document.getElementById("td51");
// case_18.innerText = jeuEchec[7][2];

// let case_19 = document.getElementById("td52");
// case_19.innerText = jeuEchec[7][3];

// let case_20 = document.getElementById("td53");
// case_20.innerText = jeuEchec[7][4];

// let case_21 = document.getElementById("td54");
// case_21.innerText = jeuEchec[7][5];

// let case_22 = document.getElementById("td55");
// case_22.innerText = jeuEchec[7][6];

// let case_23 = document.getElementById("td56");
// case_23.innerText = jeuEchec[7][7];

// let case_24 = document.getElementById("td57");
// case_24.innerText = jeuEchec[7][7];

// let case_25 = document.getElementById("td58");
// case_25.innerText = jeuEchec[6][1];

// let case_26 = document.getElementById("td59");
// case_26.innerText = jeuEchec[6][1];

// let case_27 = document.getElementById("td60");
// case_27.innerText = jeuEchec[6][2];

// let case_28 = document.getElementById("td61");
// case_28.innerText = jeuEchec[6][3];

// let case_29 = document.getElementById("td62");
// case_29.innerText = jeuEchec[6][4];

// let case_30 = document.getElementById("td63");
// case_30.innerText = jeuEchec[6][5];

// let case_31 = document.getElementById("td64");
// case_31.innerText = jeuEchec[6][6];

// let case_32 = document.getElementById("td65");
// case_32.innerText = jeuEchec[6][7];
