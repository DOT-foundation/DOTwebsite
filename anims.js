$(document).ready(function () {
    $(window).scroll(function () {
        $('.fade-in').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window + 100 > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 1000);
            }

        });
    });
});
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(".founder").mouseover(function () {
    $(this).css("left", $(this).offset().left).animate({"right": "-1000px"}, 1000)
});