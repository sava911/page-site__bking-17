(function($) {
    "use strict";

    
    /*--
    Smooth Scroll
    -----------------------------------*/
    $('.main-menu ul li a.demo-scroll , .header-btn a').on('click', function(e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            offset: 0,
            scrollTarget: link.hash
        });
    });
    
    
    /* view demo active */
    var moreDemo = $('.view-demo-btn-active');
    moreDemo.on('click', function(e) {
        e.preventDefault();
        $('.view-demo-area').toggleClass('demo-visible');
    })
    
    
    /*------ Wow Active ----*/
    new WOW().init();
    
    /*---- CounterUp ----*/
    $('.count').counterUp({
        delay: 80,
        time: 3000
    });
    
    
    

})(jQuery);



