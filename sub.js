$('.slider').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: true,
    dots: true,
});




$('#page-link a[href*="#"]').click(function () {
	var elmHash = $(this).attr('href'); 
	var pos = $(elmHash).offset().top;	
	$('body,html').animate({scrollTop: pos}, 500); 
	return false;
});


function mediaQueriesWin(){
	var width = $(window).width();
	if(width <= 768) {
		$(".has-child>a").on('click', function() {
			var parentElem =  $(this).parent();
			$(parentElem).toggleClass('active');
			$(parentElem).children('ul').stop().slideToggle(500);
			return false;
		});
	}else{
		$(".has-child>a").off('click');
		$(".has-child").removeClass('active');
		$('.has-child').children('ul').css("display","");/
	}
}

$(window).resize(function() {
	mediaQueriesWin();
});

$(window).on('load',function(){
	mediaQueriesWin();
});
