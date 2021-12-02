const audio = document.getElementById('audio');
audio.volume = 0;

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

function stopAudio(){
    audio.pause();
}