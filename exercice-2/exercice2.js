/**2. Web Audio API – Visualisation audio (Difficile)
 Objectif : Visualiser les fréquences audio du micro ou d’un fichier audio dans un canvas.
 API à utiliser : AudioContext, AnalyserNode, getUserMedia ou(<audio>)
Étapes : 1. Créer un <canvas>pour dessiner
 2. Créer un getUserMedia(ou AudioContextet un AnalyserNode
 3. Connecter une source audio (micro ou fichier)
 4. Dessiner les fréquences avec 
requestAnimationFrame */

//Mise en place AudioContest

const canvas = document.getElementById("bloc_canva");
const ctx = canvas.getContext("2d");

navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        const audioContext = new AudioContext();
        const source = audioContext.createMediaStreamSource(stream);

        const analyserNode = audioContext.createAnalyser();
        analyserNode.fftSize = 256;

        const bufferLength = analyserNode.frequencyBinCount; // 128
        const dataArray = new Uint8Array(bufferLength);

        source.connect(analyserNode);

        function draw() {
            requestAnimationFrame(draw);

            analyserNode.getByteFrequencyData(dataArray);

            ctx.fillStyle = '#111';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const barWidth = canvas.width / bufferLength;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const barHeight = dataArray[i];
                ctx.fillStyle = `rgb(${barHeight + 100}, 50, 200)`;
                ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
                x += barWidth;
            }
        }

        draw();
    })
    .catch(err => {
        alert("Erreur : impossible d'accéder au micro");
        console.error(err);
    });
