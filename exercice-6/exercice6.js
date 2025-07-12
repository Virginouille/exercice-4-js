/**File APi - charger une image*/
function lireFichier() {
    const fichier = document.getElementById("fichier");
    const visuel = document.getElementById("visuel");

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
        });

        reader.readAsDataURL(file);
    });
}

document.addEventListener("DOMContentLoaded", lireFichier);
