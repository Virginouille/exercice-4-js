/*IndexedDB – Gestionnaire de contacts*/
// Objectif : Gérer une base locale de contacts enregistrée dans le navigateur
//API à utiliser : indexedDB.open, transaction, objectStore

window.addEventListener("DOMContentLoaded", () => {

    const bdd = window.indexedDB.open("nouvellebdd", 1);
    console.log("nouvelle bdd : ", bdd);

    const ajoutContact = document.getElementById("btn_ajouter");

    //ajouter un contact à la bdd

    function ajouterContact() {

        ajoutContact.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("btn cliqué", ajoutContact);

            const transaction = bdd.transaction(["contacts"], "readwrite");
            const stockage = transaction.objectStore("contacts");

            const prenom = document.getElementById("prenom").value;
            const numero = document.getElementById("numero").value;

            const ajout = stockage.add({`prenom: ${prenom}, numero ${numero}});


    })

    };

ajouterContact();

});