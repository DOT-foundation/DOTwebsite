// loop through each body container
$('.container').each(function() {
    // initialize a jQuery fade in when you scroll to it
    $(this).scroll(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            $(this).animate({'opacity':'1'},500);
        }
    });
});
