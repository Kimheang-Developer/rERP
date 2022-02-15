
$(document).ready(function() {
	$('.dropdown_content').hide();
	$('.btn_nav_close').hide();
	$('#nav_normal').click(function() {
		$('.dropdown_content').show();
		$('.header').addClass('header_white')
		$('.menu').addClass('menu_white')
		$('.header_item .btn_contact').css("color", '#000')
		$('.header_item .btn_contact img').attr("src", "../img/header/edit_icon_black.png")
		$('.header_logo a h1').css("background-image", "url('../img/header/logo_black.png')")
		$('.btn_nav_open').hide();
		$('.btn_nav_close').show();
	});
	
	$('#nav_close').click(function() {
		$('.dropdown_content').hide();
		$('.header').removeClass('header_white')
		$('.menu').removeClass('menu_white')
		$('.header_item .btn_contact').css("color", '#fff')
		$('.header_logo a h1').css("background-image", "url('../img/header/logo_white.png')")
		$('.header_item .btn_contact img').attr("src", "../img/header/edit_icon_white.png")
		$('.btn_nav_open').show();
		$('.btn_nav_close').hide();
	})
});


(function($) {
	$.fn.scrollTo = function() {
		return this.each(function () {
			$(this).hide();
        	var $this = $(this);
			$(window).scroll(function() {
				if ($(window).scrollTop() >= 400) {
					$this.fadeIn();
				} else {
					$this.fadeOut();
				}
			})
       		$this.on('click', function (event) {				
				window.scrollTo({top: 0, behavior: 'smooth'});
            });
       	});
	}
	
	$.fn.tabs = function() {
		return this.each(function() {
			$(this).find('a:first').addClass('active');
			var action = this;
			$(action).on('click', 'a:not(.active)', function(event) {
				$('.active', action).removeClass('active')
				var clicked = $(event.target)
				clicked.addClass('active')
				$(clicked.attr('href'), action).addClass('active')
			})
		});
	}
}( jQuery ));
