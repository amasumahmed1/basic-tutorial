
(function ($) {



    // stiky menu start

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
            $(".header-middle").removeClass("scroll-header");
        } else {
            $(".header-middle").addClass("scroll-header");
        }
    });

    

     // stiky menu end


})(jQuery);