const btnAboutUs = document.getElementById("about-us");
const btnLogin = document.getElementById("login");
const btnScoreboard = document.getElementById("scoreboard");


function clickHandler() {
    let name = document.getElementById("name").value;
    confirm(`Hi, ${name}! Are you ready for some game?`);
  }


// Array (massive) with pictures of characters
const characters = document.querySelectorAll(".js-character");
console.log(characters);

// starting point
var activeCharacter = 0;

// function for changing character pic to next
function next(){

    // removes "active" class from the current "character"
    characters[activeCharacter].classList.remove("active");
    // changes character to next in array
        ++activeCharacter;
    
        // check - if the current character is the last in array - active character changes to first
        if (activeCharacter >= characters.length) {
            activeCharacter = 0;
        }

    // add "active" class to current character
    characters[activeCharacter].classList.add("active");
    console.log(activeCharacter);
}

function prev(){
    characters[activeCharacter].classList.remove("active");
    --activeCharacter;

        if (activeCharacter < 0) {
            activeCharacter = characters.length - 1;
        }
     
    characters[activeCharacter].classList.add("active");
    console.log(activeCharacter);
}


