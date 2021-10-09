function clickHandler() {
    let name = document.getElementById("name").value;
    confirm("Hi, " + name + "! Are you ready for some game?");
    document.getElementById("name");
  }


var imageId = document.querySelector('.character');
var images = ['knight.png', 'mage-2.png', 'archer-2.png'];
var i = 0;

function prev(){
    if (i <= 0)
        i = images.length;
        --i;
        return setImg();
}

function next(){
    if (i >= images.length-1)
        i = -1;
        i++;
        return setImg();
}

function setImg(){
    return imageId.setAttribute('src', './media/pictures/' + images[i]);
}
      