let all = document.querySelector("td");
let jeuMorpion = [" 1", "2", "3", "4 ", "", "", "", "", "",];
let joueurX = "X";
let joueurO = "O";



 document.querySelectorAll(".case").forEach(cellule =>
     cellule.addEventListener("click", boutonclic));

 function boutonclic(){
     console.log(this);
    
 };
 
 let init = document.getElementById("btnInit");

 init.addEventListener("click", clicBoutonInit);
function clicBoutonInit() {
    afficheJeu(jeuMorpion);
}


 