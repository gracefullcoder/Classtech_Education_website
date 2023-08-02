// Wait for the DOM to be ready before executing the code
$(document).ready(function () {
    // Hide the element with the class "courses-slider2"
    $(".courses-slider2").hide();

    // Add a click event listener to elements with the ID "btn"
    $(document).on('click', "#btn", function () {
        // Determine the text for the button based on the visibility of "courses-slider2"
        var morelessbtn = $(".courses-slider2").is(":visible") ? 'Show More' : 'Show Less';
        $(this).text(morelessbtn); // Set the text of the button to "Show More" or "Show Less"

        // Toggle the visibility of "courses-slider2" and "courses-slider1"
        $(this).parent(".box").find(".courses-slider2").toggle();
        $(this).parent(".box").find(".courses-slider1").toggle();
    });
});

// Initialize the Swiper slider for the teachers section
var swiper = new Swiper(".teachers-slider", {
    spaceBetween: 20, // Set the space between slides to 20px
    grabCursor: true, // Enable the grab cursor on the slider
    loop: true, // Enable infinite loop of slides

    pagination: {
        el: ".swiper-pagination", // Set the element to display the pagination dots
        clickable: true, // Enable clickable pagination dots
    },

    autoplay: {
        delay: 2500, // Set the autoplay delay to 2500ms (2.5 seconds)
        disableOnInteraction: false, // Disable autoplay when user interacts with slider
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
