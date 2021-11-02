const audio = document.getElementById('audio');
audio.volume = 0;

function audioPlay(){
    audio.play();
}

function changeThemeToTavern(){
    audio.src = './media/audio/tavern-theme.mp3';
    audio.play();
}