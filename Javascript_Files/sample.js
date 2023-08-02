// Get the menu button and navigation menu elements
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

// Toggle the mobile menu when the menu button is clicked
menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times'); // Toggle the 'fa-times' class on the menu button icon
  navbar.classList.toggle('active'); // Toggle the 'active' class on the navigation menu
}

// Initialize the Swiper slider for the courses section
var swiperCourses = new Swiper(".courses-slider", {
  effect: "flip", // Set the transition effect to 'flip'
  grabCursor: true, // Enable the grab cursor on slider
  autoplay: {
    delay: 2500, // Set the autoplay delay to 2500ms (2.5 seconds)
    disableOnInteraction: false, // Disable autoplay when user interacts with slider
  },
  pagination: {
    el: ".swiper-pagination", // Set the element to display the pagination dots
  },
  navigation: {
    nextEl: ".swiper-button-next", // Set the element to display the next slide button
    prevEl: ".swiper-button-prev", // Set the element to display the previous slide button
  },
});

// Initialize the Swiper slider for the teachers section
var swiperTeachers = new Swiper(".teachers-slider", {
  spaceBetween: 20, // Set the space between slides to 20px
  grabCursor: true, // Enable the grab cursor on slider
  loop: true, // Enable infinite loop of slides

  pagination: {
    el: ".swiper-pagination", // Set the element to display the pagination dots
    clickable: true, // Enable clickable pagination dots
  },
  breakpoints: {
    540: {
      slidesPerView: 1, // Show 1 slide per view on screens with width less than 540px
    },
    768: {
      slidesPerView: 2, // Show 2 slides per view on screens with width less than 768px
    },
    1024: {
      slidesPerView: 3, // Show 3 slides per view on screens with width less than 1024px
    },
  },
});

// Initialize the Swiper slider for the reviews section
var swiperReviews = new Swiper(".reviews-slider", {
  spaceBetween: 30, // Set the space between slides to 30px
  centeredSlides: true, // Enable centered slides
  autoplay: {
    delay: 2500, // Set the autoplay delay to 2500ms (2.5 seconds)
    disableOnInteraction: false, // Disable autoplay when user interacts with slider
  },
  pagination: {
    el: ".swiper-pagination", // Set the element to display the pagination dots
    clickable: true, // Enable clickable pagination dots
  },
  navigation: {
    nextEl: ".swiper-button-next", // Set the element to display the next slide button
    prevEl: ".swiper-button-prev", // Set the element to display the previous slide button
  },
});
