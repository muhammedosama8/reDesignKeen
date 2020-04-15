$(function () {
    'use strict';
    console.log($(window).scrollTop());
    $(window).scroll('scroll',function () {
        if ($(window).scrollTop() > 200){
            $('.cd-top').fadeIn();

        }else {
            $('.cd-top').fadeOut();
        }

    });
});
$(document).ready(function () {

    $(function () {
        $('.carousel').carousel({
            interval: 2000
        });
    });


});
/*
document.getElementById("apps").onclick=function (evt) {
    evt.preventDefault();
    document.getElementById('appsDropdown').classList.toggle("show");
    document.getElementById('pagesDropdown').classList.remove("show");
    document.getElementById('featuresDropdown').classList.remove("show");
    document.getElementById('baseDropdown').classList.remove("show");
    document.getElementById('formsDropdown').classList.remove("show");
    document.getElementById('iconsDropdown').classList.remove("show");
}; */
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
    $('#appsDropdown').removeClass('show')
});
/*
document.getElementById("pages").onclick=function (evt) {
    evt.preventDefault();
    document.getElementById('pagesDropdown').classList.toggle("show");
    document.getElementById('appsDropdown').classList.remove("show");
    document.getElementById('featuresDropdown').classList.remove("show");
    document.getElementById('baseDropdown').classList.remove("show");
    document.getElementById('formsDropdown').classList.remove("show");
    document.getElementById('iconsDropdown').classList.remove("show");

};
document.getElementById("features").onclick=function (evt) {
    evt.preventDefault();
    document.getElementById('featuresDropdown').classList.toggle("show");
    document.getElementById('appsDropdown').classList.remove("show");
    document.getElementById('pagesDropdown').classList.remove("show");
    document.getElementById('baseDropdown').classList.remove("show");
    document.getElementById('formsDropdown').classList.remove("show");
    document.getElementById('iconsDropdown').classList.remove("show");
};
document.getElementById("base").onclick=function (evt) {
    evt.preventDefault();
    document.getElementById('baseDropdown').classList.toggle("show");
    document.getElementById('featuresDropdown').classList.remove("show");
    document.getElementById('appsDropdown').classList.remove("show");
    document.getElementById('pagesDropdown').classList.remove("show");
    document.getElementById('formsDropdown').classList.remove("show");
    document.getElementById('iconsDropdown').classList.remove("show");
};
document.getElementById("forms").onclick=function (evt) {
    evt.preventDefault();
    document.getElementById('formsDropdown').classList.toggle("show");
    document.getElementById('featuresDropdown').classList.remove("show");
    document.getElementById('appsDropdown').classList.remove("show");
    document.getElementById('pagesDropdown').classList.remove("show");
    document.getElementById('baseDropdown').classList.remove("show");
    document.getElementById('iconsDropdown').classList.remove("show");
};
document.getElementById("icons").onclick=function (evt) {
    evt.preventDefault();
    document.getElementById('iconsDropdown').classList.toggle("show");
    document.getElementById('formsDropdown').classList.remove("show");
    document.getElementById('featuresDropdown').classList.remove("show");
    document.getElementById('appsDropdown').classList.remove("show");
    document.getElementById('pagesDropdown').classList.remove("show");
    document.getElementById('baseDropdown').classList.remove("show");
};
*/
/* ************************************* */
function toggle(source) {
    let checkboxes = document.getElementsByClassName('.input');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}

$('.fa-ellipsis-h').onclick(function () {
    $(this).addClass('test');
});


