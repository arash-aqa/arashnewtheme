import './assets/style/homepage-style.scss';

/// for page js
// let navicon = document.querySelector("#nav-icon");
// let navwrapper = document.querySelector(".nav-wrapper");
// let nav = document.querySelector(".nav");
// navicon.addEventListener("click", () => {
//         navicon.classList.toggle("open");
//         navwrapper.classList.toggle("mobilenavopen");
//         nav.classList.toggle("nav-open");
//     }
// );
(function ($) {

    if (($(document).width() + 17) <= 980) {

/// for mobile nav
        $('li.menu-item-has-children').prepend('<span data-icon="&#x4c" class="li-child-icon"></span>');
        $(".nav").find("li .li-child-icon").on('click', function (e) {
            e.preventDefault();
            $(this).parent('li').stop(true, true).toggleClass('open-sub');
        });

/// click out side to hide mobile nav


        $(document).on("mouseup", (e) => {
            if ($('nav').hasClass('nav-open')) {
                if ((!$('nav').is(e.target) // if the target of the click isn't the container...
                    && $('nav').has(e.target).length === 0) // ... nor a descendant of the container
                    && (!$('#nav-wrapper').is(e.target) // prevent to not conflict with down function
                        && $('#nav-wrapper').has(e.target).length === 0)) { // ... not descendant click conflict down function

                    $('nav').removeClass('nav-open');
                    $('#nav-icon').removeClass('open');
                }

            }
        });

        $('#nav-wrapper').on("click", (e) => {
            e.preventDefault();
            if (!$('nav').is(e.target) && $('nav').has(e.target).length === 0) {
                $('nav').toggleClass('nav-open');
                $('#nav-icon').toggleClass('open');
            }
        });
    } else if (($(document).width() + 17) > 980) {
        console.log(($(document).width() + 17))
        $('li.menu-item-has-children').prepend('<span data-icon="&#x33" class="li-child-icon-desktop"></span>');

    }

}(jQuery));