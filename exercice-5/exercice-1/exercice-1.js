/**Au chargement du dom */
document.addEventListener("DOMContentLoaded", () => {
    play();
    pause();
    reinitialiser();
});

const audio = document.getElementById("audio");

/**Fonction play */
function play() {

    const btnLecture = document.querySelector(".btn_lecture");

    btnLecture.addEventListener("click", () => {
        console.log("btn_cliqué", btnLecture);
        audio.play();
    });
};

/**Fonction pause */
function pause() {
    const btnPause = document.querySelector(".btn_pause");

    btnPause.addEventListener("click", () => {
        console.log("btn-pause cliqué", btnPause);
        audio.pause();
    })
};

/**Fonction réinitialiser */
function reinitialiser() {

    const btnReinitialiser = document.querySelector(".btn_reinitialiser");

    btnReinitialiser.addEventListener("click", () => {
        console.log("btn reinitialisé cliqué", btnReinitialiser);
        audio.load();
    })
};
