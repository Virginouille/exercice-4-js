/**2. Web Audio API – Visualisation audio (Difficile)
 Objectif : Visualiser les fréquences audio du micro ou d’un fichier audio dans un canvas.
 API à utiliser : AudioContext, AnalyserNode, getUserMedia ou(<audio>)
Étapes : 1. Créer un <canvas>pour dessiner
 2. Créer un getUserMedia(ou AudioContextet un AnalyserNode
 3. Connecter une source audio (micro ou fichier)
 4. Dessiner les fréquences avec 
requestAnimationFrame */

//Mise en place AudioContest

const audioContest = new AudioContext();
const analiserNode = audioContest.createAnalyser();