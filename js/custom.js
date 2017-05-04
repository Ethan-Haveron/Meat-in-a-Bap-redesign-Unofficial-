// JavaScript Document





 
$(window).scroll(function(event){
	var scroll = $(window).scrollTop();
	
	if (scroll > 100) {
		$("nav").css('background', '#000');
	}
	
	else if( scroll == 0 ) {
		$("nav").css('background', 'transparent');
	}
});
  



$('.parallax-window').parallax({imageSrc:'img/check-us-out'});







