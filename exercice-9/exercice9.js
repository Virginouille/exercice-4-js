/** Clipboard API – Copier du texte */
/**Objectif : Permettre de copier du texte depuis un champ via un bouton.
 API à utiliser : navigator.clipboard.writeText
 Étapes :
 1. Ajouter un champ <input>avec du texte
 2. Ajouter un bouton "Copier"
 3. Copier le texte du champ au clic
 4. Afficher un message de confirmation */

const texte = document.getElementById("texte");
const btnCopier = document.getElementById("btn_copier");

/**Fonction copie champ */
function copierChamp() {

    btnCopier.addEventListener("click", () => {
        console.log("btn cliqué");

        navigator.clipboard.writeText(texte.textContent)
            .then(() => {
                console.log("texte copié");
                afficherMessage();
            })
            .catch((err) => {
                console.log("Erreur de copie", err);
            });

    });
};

/**Fonction afficher message */
function afficherMessage() {
    const afficherConfirmation = document.createElement("p");

    afficherConfirmation.textContent = texte.value;

    document.body.appendChild(afficherConfirmation);
}

copierChamp();