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
/*$(function () {
        if ($(window).width()< 400) {
            $('#kaside').addClass('hide');
            $('#leftNavUl').addClass('hide');
        }
    }
);*/
$(window).resize(function() {

    if ($(window).width()< 767) {
        if ($('#kaside' ).hasClass( "add1" )){
            $('#kaside').removeClass('add1');
            $('#kbody').removeClass('add2');
        }
    } else if ($(window).width()> 767) {
        $('#kaside').addClass('kasideWidth');
        $('#kbody').addClass('kbodyWidth');
        $('.leftNav').css("display","block");
        $('#kaside').css("display","block");

    }

});

