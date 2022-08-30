var swiper = new Swiper(".services__swiper", {
    slidesPerView: 1,
    spaceBetween: 80,
    pagination: {
        el: ".service__slid-count",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,
});

//////////////////


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    mouseDrag: false,
    autoplay: true,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


////////////////////////

$('input').focus(function () {
    $(this).parent().addClass('active');
    $('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    })
});

///////////////////////////////////////
// Navbar scroll

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }

});


///////////////////////////////

// $(window).scroll(function () {
//     var windscroll = $(window).scrollTop();
//     if (windscroll >= 100) {
//         $('section').each(function (i) {
//             // The number at the end of the next line is how pany pixels you from the top you want it to activate.
//             if ($(this).position().top <= windscroll - -1500) {
//                 $('.navigation__link.active').removeClass('active');
//                 $('.navigation__link').eq(i).addClass('active');

//             }
//         });

//     } else {

//         $('.navigation__link.active').removeClass('active');
//         $('.navigation__link:first').addClass('active');
//     }

// }).scroll();


/////////////////////////////////////
// Hamburg menu
// $(document).ready(function () {
//     $(".hamburger").click(function () {
//         $(this).toggleClass("is-active");
//     });
// });


//////////////////////////////////////////
// Navbar-scroll

$('a[href^="#"]').on('click', function (e) {
    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 70
    }, 200, 'swing', function () {
        window.location.hash = target;
    });
});


/////////////////////////////////////////////////////
// Mobile menu
const openBtn = document.querySelector("#hamburger-1")
const closeBtn = document.querySelector("#hamburger-2")
const nav_list = document.querySelector(".navigation__list")
const overlay = document.querySelector(".overlay")
const navContact = document.querySelector(".nav-contact")
overlay.classList.add("hidden")

function mobileMenu() {
    openBtn.classList.add("active");
    nav_list.classList.add("active")
    overlay.classList.remove("hidden")
}
function mobileMenuClose() {
    openBtn.classList.remove("active");
    nav_list.classList.remove("active")
    overlay.classList.add("hidden")
}


openBtn.addEventListener("click", mobileMenu)
closeBtn.addEventListener("click", mobileMenuClose)
overlay.addEventListener("click", mobileMenuClose)

/////////////////////////////////////////////////////
// scroll

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

// //////////////////
//GALLERY

$('.menu__img-box').magnificPopup({
    type: 'image',
    gallery: {
        enabled: false
    }
})

// //////////////////////////
// // project

// const projectBtn = document.querySelectorAll(".projects__single-item")

// projectBtn.forEach((btn) => {
//     btn.addEventListener("click", (el) => {
//         let projectInfo = el.target.closest(".projects__outer");

//         console.log(projectInfo.style);
//         projectInfo.style.bottom = "-6rem"
//     })
// })