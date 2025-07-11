/**Fonction play */
function play() {
    document.addEventListener("DOMContentLoaded", () => {
        const audio = document.getElementById("audio");
        const btnLecture = document.querySelector(".btn_lecture");

        console.log("test");

        btnLecture.addEventListener("click", () => {
            console.log("btn_cliqué", btnLecture);
            audio.play();
        });
    });

}

play();
