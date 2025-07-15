/*IndexedDB – Gestionnaire de contacts*/
// Objectif : Gérer une base locale de contacts enregistrée dans le navigateur
//API à utiliser : indexedDB.open, transaction, objectStore

window.addEventListener("DOMContentLoaded", () => {
    const ajoutContact = document.getElementById("btn_ajouter");

    //ouvrir base
    const base = window.indexedDB.open("nouvellebdd", 1);
    console.log("nouvelle bdd : ", base);

    //creation d'un store
    base.onupgradeneeded = function (event) {
        const bdd = event.target.result;
        bdd.createObjectStore("contacts", { keyPath: "id", autoIncrement: true });
    }

    //ajouter un contact à la bdd

    function ajouterContact() {


        base.onsuccess = function (event) {
            const bdd = event.target.result;
            console.log("bdd ouverte avec succès", bdd);

            ajoutContact.addEventListener("click", (event) => {
                event.preventDefault();
                console.log("btn cliqué", ajoutContact);


                const transaction = bdd.transaction(["contacts"], "readwrite");
                const stockage = transaction.objectStore("contacts");

                const prenom = document.getElementById("prenom").value;
                const numero = document.getElementById("numero").value;

                const ajout = stockage.add({ prenom: prenom, numero: numero });

                console.log("Contact ajouté", ajout);
            })
        };

    };

    ajouterContact();

});