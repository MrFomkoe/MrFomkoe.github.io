function clickHandler() {
    let name = document.getElementById("name").value;
    confirm("Hi, " + name + "! Are you ready for some game?");
    document.getElementById("name");
  }

// Takes the first element with "character" class
var imageId = document.querySelector('.character');

// Array (massive) with picture names
var images = ['knight.png', 'mage-2.png', 'archer-2.png'];

// starting point
var i = 0;

// Can't place curly braces - why?
function prev(){
    if (i <= 0)
        i = images.length;
        --i;
        return setImg();
}

// Can't place curly braces - why?
function next(){
    if (i >= images.length-1)
        i = -1;
        ++i;
        return setImg(); 
}

function setImg(){
    return imageId.setAttribute('src', './media/pictures/' + images[i]);
}
      