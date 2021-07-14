"use strict"
//прелоадер
$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});


//меню для мобильных телефонов
$(document).ready(function () {
    $('.menu').click(function (event) {
        $('.nav-wrapper-first, .menu').toggleClass('active');
    });
    //  $('.menu').click(function (event) {
    //     $('.nav-wrapper-first, .menu').removeClass('active');
    // });
    //    $('.header__menu').click(function (event) {
    //     $('.header_burger,.header__menu, .header__number').removeClass('active');
    
    // });
});


//Кнопка назад
$(document).ready(function(){
$("#goTop").hide();

$(function () {
	$(window).scroll(function () {

	if ($(this).scrollTop() > 300) {

	$('#goTop').fadeIn();
	} else {
	$('#goTop').fadeOut();
	}
});

	$('#goTop a').click(function () {
	$('body,html').animate({scrollTop: 0}, 300);
		return false;
		});
	});
});


//Анимация для скролла по якорям
$('a[href^="#portfolio"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});
$('a[href^="#feedback"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});
$('a[href^="#about"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});
$('a[href^="#home"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});

//изменение поведения элементов при скролле по странице
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.documentElement.clientWidth > 800) {
  	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 600) {
    document.getElementById("nav").style.cssText = "position: fixed; top: 0; background-color: #fff; width: 100%;box-shadow: 0px 2px 2px #9a9898";
  	} else {
    document.getElementById("nav").style.cssText = "position: relative";
  	}
  }
  if(document.documentElement.clientWidth > 800) {
  	 if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 600) {
    document.getElementById("name-scroll").style.cssText = "display: block";
  	} else {
   	 document.getElementById("name-scroll").style.cssText = "display: none";
 	}
  }
  if(document.documentElement.clientWidth > 800) {
   	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 600) {
    document.getElementById("img-none").style.cssText = "display: none";
 	} else {
    	document.getElementById("img-none").style.cssText = "display: block";
  	}
   }
   
}
