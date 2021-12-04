// Get all modals
let modal = document.querySelectorAll('.myModal');

// Get all buttons with the class
let btn = document.querySelectorAll('.myBtn');

 // Get the <span> element that closes the modal
let close = document.querySelectorAll('.close');

// Makes it possible to work with nodelist
btn.forEach(element => {
  // adds event listener to each object of nodelist
  element.addEventListener('click', () => {
    // takes the index number of 'pressed' button 
    let number = Array.prototype.indexOf.call(btn, element);
    if (number == 3){
      number = 2;
    }
    modal[number].style.display = "flex";
  })
})

// Makes it possible to work with nodelist
close.forEach(element => {
  // adds event listener to each object of nodelist  
  element.addEventListener('click', () => {
    // changes the display to all objects of nodelist with modals
    modal.forEach(element => {
      element.style.display = "none";
    })
  })
})