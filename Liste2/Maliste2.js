let liste = ["France",
    "Allemagne",
    "Portugal",
    "Espagne",
    "Italie"];
let maListe = document.getElementById("maliste");
let monLi;

for (let i = 0; i < liste.length; i++) {
    console.log(liste[i]);
    monLi = document.createElement("li");
    monLi.innerText = liste[i];
    maListe.appendChild(monLi);
}




