$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .menu_2').toggleClass('active');
    });
});

$('.intro, .info_for_authors').click(function(event) {
    $('.header_burger, .menu_2').removeClass('active');
});