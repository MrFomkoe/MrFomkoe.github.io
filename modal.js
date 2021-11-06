
// Get the modal
 var modal = document.getElementById("myModal");
 var modall = document.getElementById("myLogin");
 var modalll = document.getElementById("myScoreboard");

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 var btnn = document.getElementById("login")
 var btnnn = document.getElementById("scoreboard")

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 var spann = document.getElementsByClassName("close-login")[0];
 var spannn = document.getElementsByClassName("close-scoreboard")[0];

 // When the user clicks the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "flex";
 }
 
 btnn.onclick = function () {
  modall.style.display = "flex"
 }

 btnnn.onclick = function () {
  modalll.style.display = "flex" 
  }


 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
  modal.style.display = "none";
}

spann.onclick = function() {
  modall.style.display = "none"
}

spannn.onclick = function() {
  modalll.style.display = "none"
}
 
 // When the user clicks anywhere outside of the modal, close it
//  window.onclick = function(event) {
//    if (event.target == modal) {
//      modal.style.display = "none";
//    }
//  }
