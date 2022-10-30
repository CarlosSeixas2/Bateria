//keyup é o tipo de evento que vai ser usado
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase())
    // event.code é pra mostrar a tecla que eu to apertando
    // toLowerCase() é pra deixar minuscula
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song != '') {
        let songArray = song.split('');
        playComposition(songArray)
    }
});


function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        //esse é pra quando eu apertar ele zera e não ter delay no audio
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active')

        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 200);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songitens of songArray) {
        setTimeout(() => {
            playSound(`key${songitens}`);
        },wait)

        wait += 560;
    }
}