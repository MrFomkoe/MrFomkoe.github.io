const btnAboutUs = document.getElementById("about-us");
const btnLogin = document.getElementById("login");
const btnScoreboard = document.getElementById("scoreboard");
const headingContent = document.querySelectorAll('.heading-content');
const playerNameSpan = document.querySelectorAll('.playerNameSpan');
const logoContainer = document.querySelector('.logoContainer');
const logo = document.querySelector('.logo');
const logoAll = document.querySelectorAll('.logoAll');
const navbar = document.querySelector('.navbar');
const startBTN = document.querySelector('.startBTN')


// Array (massive) with pictures of characters
const characters = document.querySelectorAll(".js-character");

// character change arrows
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

// starting point for character change
let activeCharacter = 0;


// function to place logo, shownavbar and play music
logoAll.forEach(function (element){
    element.addEventListener("click", logoChange)
});

// logoAll.forEach(function (element){
//     element.removeEventListener("click", logoChange)
// });

function logoChange(){
        console.log(logoContainer);
        logoAll.forEach(function (element){
            element.removeEventListener("click", logoChange)
        });
        logoContainer.animate([
            {opacity: '0'}
        ],  {
            duration: 2000,
            iterations: 1,
            fill: 'forwards'
        });   
        logo.animate([
            {transform: 'scale(0.65, 0.65) rotate(360deg)'},
        ], {
            duration: 1500,
            easing: 'ease-out',
            iterations: 1,
            fill: 'forwards'
        });
        navbar.animate([
            {opacity: '1'}
        ],  {
            duration: 5000,
            iterations: 1,
            fill: 'forwards'
        });   

        startBTN.animate([
            {opacity: '1'}
        ],  {
            duration: 5000,
            iterations: 1,
            fill: 'forwards'
        });     
        
        audio.animate([
            {opacity: '1'}
        ],  {
            duration: 5000,
            iterations: 1,
            fill: 'forwards'
        });
        
        setTimeout(function(){
            logoContainer.style.display = 'none';
        }, 1000);

        playMainTheme()
};


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

// changing character to next
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

// changing character to previous
arrowLeft.addEventListener("click", function () {
    characters[activeCharacter].classList.remove("active");
    --activeCharacter;

        if (activeCharacter < 0) {
            activeCharacter = characters.length - 1;
        }
     
    characters[activeCharacter].classList.add("active");
    // console.log('active character is: ', activeCharacter);
});

let wrapperContentSlideFour

// function that adds the character 
function addCharacter(){
    let wrapperContent = document.querySelector('.slide-wrapper-content');
    let characterToShow = document.createElement('IMG');
    characterToShow.src = characters[activeCharacter].src;
    characterToShow.className = 'character active';

    characterToShow.style.cssText = `
        position: relative;
        width: 200px;
        height: 200px;
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

function nextGame(){
    modalWon.style.display = 'none';
    modalLostButContinue.style.display = 'none';
    addCharacter();
}

