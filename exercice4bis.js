/**Exercice 4 . Geolocation API – Affichage sur carte */
/**Objectif : Récupérer la position de l’utilisateur et l’afficher sur une carte. */
/*API à utiliser : navigator.geolocation.getCurrentPosition*/

//Obtenir la lattitude et la longitude

function obtenirGeolocalisation() {
    navigator.geolocation.getCurrentPosition((position) =>
        afficherLocalisation(position),

        (error) => {
            console.log("Erreur de géolocalisation", error.message);
        }
    );
};

//Afficher les coordonnées dans le dom
function afficherLocalisation(position) {

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const titreLoc = document.createElement("h1");
    const txtLatitude = document.createElement("p");
    const txtLongitude = document.createElement("p");

    titreLoc.id = "afficherloc";
    titreLoc.innerText = "Votre géolocalisation";

    txtLatitude.id = "latitude";
    txtLongitude.id = "longitude";

    document.body.append(titreLoc, txtLatitude, txtLongitude);

    txtLatitude.innerHTML = `Latitude : ${latitude}`;
    txtLongitude.innerHTML = `Longitude : ${longitude}`;

}

window.addEventListener("load", obtenirGeolocalisation);


