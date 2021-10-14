function clickHandler() {
    let name = document.getElementById("name").value;
    confirm("Hi, " + name + "! Are you ready for some game?");
    document.getElementById("name");
  }


// Array (massive) with pictures of characters
const characters = document.querySelectorAll(".js-character");
console.log(characters);

// starting point
var activeCharacter = 0;

function next(){
    characters[activeCharacter].classList.remove("active");
        ++activeCharacter;
    
        if (activeCharacter >= characters.length) {
            activeCharacter = 0;
        }

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


