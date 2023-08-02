
$(document).ready(function () {
    $(".courses-slider2").hide();
    $(document).on('click', "#btn", function () {
        var morelessbtn = $(".courses-slider2").is(":visible") ? 'Show More' : 'Show Less';
        $(this).text(morelessbtn);
        $(this).parent(".box").find(".courses-slider2").toggle();
        $(this).parent(".box").find(".courses-slider1").toggle();
    });
});

var swiper = new Swiper(".teachers-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
