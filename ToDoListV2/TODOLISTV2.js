const buttons = document.querySelectorAll(".bouton");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        buttons[i].parentElement.style.display = "none";
    });
}

function maFonction() {
    let div = document.getElementById("cacher");
    if (div.style.display === "none"){
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}