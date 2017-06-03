 $(document).ready(function(){

 	setTimeout(function(){
 		AOS.init({
	    	duration: 1000
		});	
 	},100)

	//Slider for Banner section
	$('.banner__slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  dots: false,
	  arrows: false,
	  autoplay: true,
	  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        fade: false
	      }
	    }
	  ]
	});

	//slider for WHYEMR section
 	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: false,
	  arrows: false,
	  asNavFor: '.slider-nav',
	  infinite: false,
	  autoplay: true,
	  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        dots: true
	      }
	    }
	  ]
	});
	$('.slider-nav').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
	  arrows: false,
	  centerMode: false,
	  focusOnSelect: true,
	  infinite: false,
	  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        dots: false
	      }
	    }
	  ]
	});

	// Sidebar stick for static pages
	$("#sidebar").stick_in_parent({
		offset_top: 100,
	});
});


//For Sticky header Animation
$(window).bind('scroll', function () {
    var navHeight = $(window).height() - 1;
    if ($(window).scrollTop() >= 1) {
        $('.navbar').addClass('on');
    } else {
        $('.navbar').removeClass('on');
    }
});