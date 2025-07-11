/**Au chargement du dom */
document.addEventListener("DOMContentLoaded", () => {
    play();
    pause();
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
    const btn_pause = document.querySelector(".btn_pause");

    btn_pause.addEventListener("click", () => {
        console.log("btn-pause cliqué", btn_pause);
        audio.pause();
    })

};
