let btnIniciar = document.getElementById('iniciar');
let btnPausar = document.getElementById('pausar');
let progress = document.getElementById('progress-bar');

let sound = new Audio ("./audio/i-know.mp3");


btnIniciar.addEventListener('click', () =>{
    sound.play();
});

btnPausar.addEventListener('click', ()=>{
    sound.pause();
});

sound.addEventListener('timeupdate', () =>{
    let progressBar = (sound.currentTime / sound.duration) * 100;
    progress.value = progressBar;
});

sound.addEventListener('ended', () =>{
    progress.value = 0;
});

