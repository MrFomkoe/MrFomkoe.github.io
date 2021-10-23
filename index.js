const btnAboutUs = document.getElementById("about-us");
const btnLogin = document.getElementById("login");
const btnScoreboard = document.getElementById("scoreboard");

function clickHandler() {
    let name = document.getElementById("name").value;
    confirm(`Hi, ${name}! Are you ready for some game?`);
  }


// Array (massive) with pictures of characters
const characters = document.querySelectorAll(".js-character");

// 
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

// starting point
let activeCharacter = 0;

arrowLeft.addEventListener("click", function () {
    characters[activeCharacter].classList.remove("active");
        ++activeCharacter;
    
        if (activeCharacter >= characters.length) {
            activeCharacter = 0;
        }

    characters[activeCharacter].classList.add("active");
    console.log(activeCharacter);
});

arrowRight.addEventListener("click", function () {
    characters[activeCharacter].classList.remove("active");
    --activeCharacter;

        if (activeCharacter < 0) {
            activeCharacter = characters.length - 1;
        }
     
    characters[activeCharacter].classList.add("active");
    console.log(activeCharacter);
});


