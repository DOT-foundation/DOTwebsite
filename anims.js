$(document).ready(function () {
    $(window).scroll(function () {
        $("#header").animate({ 'top': '0px' }, 700);
        $(".scroll-text").remove()
        // reduce size of image based on scroll distance        
        $("#background-image").css("height", Math.max(50, (1 - (window.scrollY / window.innerHeight)) * 100) + "vh");

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
let x = 0
setInterval(() => {

    $(".scroll-text").animate({ 'opacity': Math.abs(Math.sin(x)) }, 10);
    x += .01

}, 10);

$(".founder").hover(function () {
    $("#founder-desc").text(this.getAttribute("data-description"))
})