$("header nav a").click(function() {
    $('html, body').animate({
        scrollTop: $($(this).data('scroll-to')).offset().top
    }, 2000);
    $('header nav a').removeClass('active');
    $(this).addClass('active');
});
