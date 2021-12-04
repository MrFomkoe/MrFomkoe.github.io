// defines hit sound
let hitSound = document.getElementById('hitSound');
// defines kill sound
let killSound = document.getElementById('killSound');

// the music player
const audio = document.getElementById('audio');
audio.volume = 0.2;

function playMainTheme(){
    audio.src = './media/audio/main-theme.mp3';
    audio.play();
}

function changeThemeToTavern(){
    audio.src = './media/audio/tavern-theme.mp3';
    audio.play();
}

function changeThemeToBattle(){
    audio.src = './media/audio/battle-theme.mp3';
    audio.play();    
}
function playSnakeTheme(){
    audio.src = './media/audio/snake/snake-theme.mp3';
    audio.play();    
}

function stopAudio(){
    audio.pause();
}