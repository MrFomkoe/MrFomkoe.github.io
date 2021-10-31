let audio = document.getElementById('audio');
audio.play();
audio.volume = 0.5;

function changeThemeToTavern(){
    audio.src = './media/audio/tavern-theme.mp3';
    audio.play();
}