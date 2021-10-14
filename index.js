console.log("Console is working as aspected...");

const characters = document.querySelectorAll(".js-character");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

const btnAboutUs = document.getElementById("about-us");
const btnLogin = document.getElementById("login");
const btnScoreboard = document.getElementById("scoreboard");

/* CHARACTERS SLIDER */
let activeCharacter = 0;
  arrowRight.addEventListener("click", function () {
  characters[activeCharacter].classList.remove("active");
  activeCharacter = activeCharacter + 1;

  if (activeCharacter >= characters.length) {
    activeCharacter = 0;
  }
  characters[activeCharacter].classList.add("active");
});

arrowLeft.addEventListener("click", function () {
  characters[activeCharacter].classList.remove("active");
  activeCharacter = activeCharacter - 1;

  if (activeCharacter < 0) {
    activeCharacter = characters.length - 1;
  }
  characters[activeCharacter].classList.add("active");
});

function clickHandler() {
  let name = document.getElementById("name").value;
  confirm(`Hi, ${name}! Are you ready for some game?`);
}

console.log("characters: ", characters);
console.log("arrowLeft: ", arrowLeft);
console.log("arrowRight: ", arrowRight);
console.log("activeCharacter: ", activeCharacter);
console.log("characters[activeCharacter]: ", characters[activeCharacter]);
