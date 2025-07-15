/*IndexedDB – Gestionnaire de contacts*/
// Objectif : Gérer une base locale de contacts enregistrée dans le navigateur
//API à utiliser : indexedDB.open, transaction, objectStore

window.addEventListener("DOMContentLoaded", () => {
    const ajoutContact = document.getElementById("btn_ajouter");

    //ouvrir base
    const base = window.indexedDB.open("nouvellebdd", 2);
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

            afficherContacts(bdd);

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

    /*afficher contacts*/
    function afficherContacts(bdd) {

        base.onsuccess = function (event) {
            const bdd = event.target.result;
            const transaction = bdd.transaction(["contacts"], "readonly");
            const stockage = transaction.objectStore("contacts");

            const requete = stockage.openCursor();
            const listeContacts = document.getElementById("liste_contacts");

            requete.onsuccess = function (event) {
                const cursor = event.target.result;

                if (cursor) {
                    const contact = cursor.value;
                    const li = document.createElement("li");
                    li.textContent = `${contact.prenom} - ${contact.numero}`;
                    listeContacts.appendChild(li);
                    cursor.continue();
                } else {
                    console.log("Liste complète");
                }
            };
        }

    }

    ajouterContact();

});