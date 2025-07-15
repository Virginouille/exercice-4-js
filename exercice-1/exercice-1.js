/**Au chargement du dom */
document.addEventListener("DOMContentLoaded", () => {

    const audio = document.getElementById("audio");
    afficherTemps();
    play();
    pause();
    reinitialiser();
});


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

/**Fonction afficher temps */
function afficherTemps() {
    const temps = document.getElementById("chrono");
    const afficher = document.createElement("span");
    temps.appendChild(afficher);

    let interval = null;

    audio.addEventListener("play", () => {
        if (interval === null) {
            interval = setInterval(() => {
                const min = String(Math.floor(audio.currentTime / 60)).padStart(2, "0");
                const sec = String(Math.floor(audio.currentTime % 60)).padStart(2, "0");
                afficher.textContent = `${min}.${sec}`;

            }, 100);
        }
    });

    audio.addEventListener("pause", () => {
        clearInterval(interval);
        interval = null;
    });

    audio.addEventListener("ended", () => {
        clearInterval(interval);
        afficher.textContent = 0;
        interval = null;
    });
}

