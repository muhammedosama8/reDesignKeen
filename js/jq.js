$(document).ready(function () {
    $('.cd-top').fadeOut();
    $(function () {
        $('.carousel').carousel({
            interval: 2000
        });
    });
    $(function () {
        'use strict';

        $(window).scroll('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.cd-top').fadeIn();

            } else {
                $('.cd-top').fadeOut();
            }

        });
    });

});

$('#apps').click(function (evt) {
    evt.preventDefault();
    $('#appsDropdown').toggle('show');
    $('#pagesDropdown').removeClass('show');
});

$('#pages').click(function (evt) {
    evt.preventDefault();
    $('#pagesDropdown').toggle('show');
    $('#appsDropdown').removeClass('show');
});

$('#features').click(function (evt) {
    evt.preventDefault();
    $('#featuresDropdown').toggle('show');
    $('#appsDropdown').removeClass('show');
});

$('#base').click(function (evt) {
    evt.preventDefault();
    $('#baseDropdown').toggle('show');
    $('#appsDropdown').removeClass('show');
});

$('#forms').click(function (evt) {
    evt.preventDefault();
    $('#formsDropdown').toggle('show');
    $('#appsDropdown').removeClass('show');
});

$('#icons').click(function (evt) {
    evt.preventDefault();
    $('#iconsDropdown').toggle('show');
    $('#appsDropdown').removeClass('show');
});
