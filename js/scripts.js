    (function ($) {
    "use strict"; 

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname ) 
            {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    /*cierra el menu responsive cuando se hace click al boton de hamburguesa */
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    /* Activa el scrollspy para añadir una clase activa a los elementos del navbar con el scroll*/
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    /*colapsa el navbar */
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    
    navbarCollapse();
    
    /*Colapsa el navbar cuando la pagina se hace scroll - no furula */
    $(window).scroll(navbarCollapse);
})(jQuery);
