let paragraphe = document.getElementById("paragraphe");
let pseudo = prompt(" Entrez votre prenom");
paragraphe.innerHTML = "Bonjour " + pseudo;
let ecrito = document.getElementById("ecrito");
ecrito.innerHTML = "6.Terminer mes blocs JS: ";

let calculation = 4 + 7.5;
console.log("le resultat est : ", calculation);
//bollean//
let nom = ("Enzo");
let beau = true;
let pasbeau = false;
console.log('mon nom est : ', nom);
console.log('il fait beau : ', beau)

let fruit = ["mangue",
    "pomme",
    "banane",
    "cerise",
    "kiwi",
    "poire"];
console.log(fruit);


class Temps {
    constructor(firsttemps, lasttemps) {
        this.firsttemps = firsttemps
        this.lasttemps = lasttemps
    }
}

let temps = new Temps("Passe", "Present")
console.log(temps.lasttemps, temps.firsttemps);


for (let i = 0; i < 6; i++) {
    if (fruit[i] === "banane") {
        console.log("la banane est jaune");
    }
    console.log(fruit[i])
}

function bonjour(nom) {
    console.log("bonjour " + nom);
}

bonjour("Enzo");
bonjour("Tashi");
bonjour("Juba");
bonjour("Wyyat");
bonjour("Abdallah");

function addition(compteur) {
    compteur++;
    return compteur;
}
let compteur = 2;
compteur = addition(compteur);
console.log(compteur);


function multipl(a, b) {
    let c = a * b;
    console.log("le resultat est :" + c);
}

multipl(10.47, 50);
multipl(27.893, 40.238);

class BePolite {

    static sayHello() {
        console.log("Hello!");
    }

    static sayHelloTo(name) {
        console.log("Hello " + name + " !");
    }

    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
}

BePolite.sayHello();

BePolite.sayHelloTo("Enzo");

const sum = BePolite.add(2, 3);

const buttons = document.querySelectorAll(".bouton"); 

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        buttons[i].parentElement.style.display = "none";
    });
}
