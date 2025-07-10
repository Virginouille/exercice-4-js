/**Fonction drag and drop */

function dragAndDrop() {

    const zone = document.querySelector(".zone_taches");
    const tache = document.querySelectorAll(".tache");

    console.log("tache cliquée", tache);
    //zone de mouv
    zone.addEventListener("dragover", (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    });

    //Drag
    tache.addEventListener("dragstart", (e) {
        e.dataTransfer.effectAllowed = "move";
    })

    //Drop
}