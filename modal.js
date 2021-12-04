// Get all modals
let modal = document.querySelectorAll('.myModal');

// Get all buttons with the class
let btn = document.querySelectorAll('.myBtn');

 // Get the <span> element that closes the modal
let close = document.querySelectorAll('.close');


btn.forEach(element => {
  element.addEventListener('click', () => {
    let number = Array.prototype.indexOf.call(btn, element);
    modal[number].style.display = "flex";
    console.log(number);
  })
})

close.forEach(element => {
  element.addEventListener('click', () => {
    console.log(element);
    modal.forEach(element => {
      element.style.display = "none";
    })
  })
})