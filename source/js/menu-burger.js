$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $('.header__item--arrow').click(function(event) {
        $('.sub-menu, .arrow').toggleClass('active');
    })
})