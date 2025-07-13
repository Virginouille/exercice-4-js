document.addEventListener("DOMContentLoaded", lireFichier);
const fichier = document.getElementById("fichier");
const visuel = document.getElementById("visuel");

/**File APi - charger une image*/
function lireFichier() {

    fichier.addEventListener("change", () => {
        const file = fichier.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.addEventListener("load", () => {
            const image = new Image();
            image.height = 100;
            image.title = file.name;
            image.src = reader.result;

            visuel.innerHTML = "";
            visuel.appendChild(image);
            afficherNomFichier(file);
        });

        reader.readAsDataURL(file);

    });
}

function afficherNomFichier(file) {
    const affichageTexte = document.createElement("p");
    affichageTexte.textContent = `${file.name}`;
    visuel.appendChild(affichageTexte);


}

