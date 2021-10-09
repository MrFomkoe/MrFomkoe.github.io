function clickHandler() {
    let name = document.getElementById("name").value;
    confirm("Hi, " + name + "! Are you ready for some game?");
    document.getElementById("name");
  }


  function changeLeft() {
      alert;
    var imageId = document.getElementById("getImage");

    if (imageId.src.match("./media/pictures/knight.png")) {
        imageId = "./media/pictures/knight.png";
    } else {
        imageId = "./media/pictures/mage.png";
    }

  } 