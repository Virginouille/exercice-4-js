/**Exercice 4 . Geolocation API – Affichage sur carte */
/**Objectif : Récupérer la position de l’utilisateur et l’afficher sur une carte. */
/*API à utiliser : navigator.geolocation.getCurrentPosition*/

//Obtenir la lattitude et la longitude

function obtenirGeolocalisation() {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Géolocalisation actuelle")
        console.log("Latitude : " + latitude);
        console.log("Longitude : " + longitude);
    },
        (error) => {
            console.log("Erreur de géolocalisation", error.message);
        }
    );
};

//Afficher les coordonnées dans le dom
function afficherLocalisation() {
    const titreLoc = document.createElement("h1");
    titreLoc.id = "afficherloc";
    document.body.appendChild(titreLoc);
    window.addEventListener("load", obtenirGeolocalisation);
}

afficherLocalisation();

