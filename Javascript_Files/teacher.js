// Get the menu button element
let menuBtn = document.querySelector('#menu-btn');

// Get the navigation menu element
let navbar = document.querySelector('.header .flex .navbar');

// Add a click event listener to the menu button
menuBtn.onclick = () => {
  // Toggle the 'fa-times' class on the menu button icon
  // This class is likely used to change the menu button icon to 'X' when the menu is open
  menuBtn.classList.toggle('fa-times');

  // Toggle the 'active' class on the navigation menu
  // This class is likely used to show or hide the navigation menu when the menu button is clicked
  navbar.classList.toggle('active');
}
