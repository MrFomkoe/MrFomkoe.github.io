const btnAboutUs = document.getElementById("about-us");
const btnLogin = document.getElementById("login");
const btnScoreboard = document.getElementById("scoreboard");
const headingContent = document.querySelectorAll('.heading-content');
const playerNameSpan = document.querySelectorAll('.playerNameSpan');

// function that adds name of the player to all headings where there is address to the player
function addName (){
    let playerName = document.getElementById("name").value;
    console.log(playerName)
    if (playerName == ''){
        playerName = 'Player';
    }
    headingContent.forEach(function (heading){
        heading.innerHTML = playerName;
    });
    playerNameSpan.forEach(function (heading){
        heading.innerHTML = playerName + ', ';
    });
}

// Array (massive) with pictures of characters
const characters = document.querySelectorAll(".js-character");

// 
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

// starting point
let activeCharacter = 0;

arrowRight.addEventListener("click", function () {
      characters[activeCharacter].classList.remove("active");
      ++activeCharacter;
    
        // check - if the current character is the last in array - active character changes to first
        if (activeCharacter >= characters.length) {
            activeCharacter = 0;
        }

    // add "active" class to current character
    characters[activeCharacter].classList.add("active");
    // console.log('active character is: ', activeCharacter);
});

arrowLeft.addEventListener("click", function () {
    characters[activeCharacter].classList.remove("active");
    --activeCharacter;

        if (activeCharacter < 0) {
            activeCharacter = characters.length - 1;
        }
     
    characters[activeCharacter].classList.add("active");
    // console.log('active character is: ', activeCharacter);
});

// function that adds the character 
function addCharacter(){
    let wrapperContent = document.querySelector('.slide-wrapper-content');
    let characterToShow = document.createElement('IMG');
    characterToShow.src = characters[activeCharacter].src;
    characterToShow.className = 'character active';

    characterToShow.style.cssText = `
        position: relative;
        width: 250px;
        height: 250px;
        opacity: 0;
        `;
    document.querySelector('.activeCharacter').appendChild(characterToShow);
    increaseOpacityCharacter(characterToShow);
    increaseOpacityCharacter(wrapperContent);
}

// function that changes opacity for the added character
function increaseOpacityCharacter(characterToShow){
    characterToShow.animate([
        {opacity: 1,},
    ],  {
        duration: 2000,
        iterations: 1,
        fill: 'forwards'})
}

