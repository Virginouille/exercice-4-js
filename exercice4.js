/**Exercice 4 . Geolocation API – Affichage sur carte */
/**Objectif : Récupérer la position de l’utilisateur et l’afficher sur une carte. */
/*API à utiliser : navigator.geolocation.getCurrentPosition*/

//Obtenir la lattitude et la longitude

function obtenirGeolocalisation(callback) {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Géolocalisation actuelle")
        console.log("Latitude : " + latitude);
        console.log("Longitude : " + longitude);

        callback(latitude, longitude);
    },
        (error) => {
            console.log("Erreur de géolocalisation", error.message);
        }
    );
};

//Afficher les coordonnées dans le dom
function afficherLocalisation() {

    const titreLoc = document.createElement("h1");
    const txtLatitude = document.createElement("p");
    const txtLongitude = document.createElement("p");

    titreLoc.id = "afficherloc";
    titreLoc.innerText = "Votre géolocalisation";

    txtLatitude.id = "latitude";
    txtLongitude.id = "longitude";

    document.body.append(titreLoc, txtLatitude, txtLongitude);

    //Récup de la fuction obtenir géoloc en récup le call back
    obtenirGeolocalisation((latitude, longitude) => {

        txtLatitude.innerHTML = `Latitude : ${latitude}`;
        txtLongitude.innerHTML = `Longitude : ${longitude}`;
    })

    afficherMap(latitude, longitude);

}

//Mise en place d'une map
function afficherMap() {

    const map = L.map('map').setView([46.5895424, 3.325952], 13);

    //Ajout calque de tuiles
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    return map;
}

window.addEventListener("load", afficherLocalisation);


