$( function() {
    $( "#tabs" ).tabs({
      event: "mouseover"
    });

	/*$('.hmSlider').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});*/

	$('.hmSlider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});

	jQuery('#main-nav').stellarNav({

	  // adds default color to nav. (light, dark)
	  theme     : 'plain', 

	  // number in pixels to determine when the nav should turn mobile friendly
	  breakpoint: 768, 

	  // label for the mobile nav
	  menuLabel: '<a href="#">Menu</a>', 

	  // adds a click-to-call phone link to the top of menu - i.e.: "18009084500"
	  phoneBtn: false, 

	  // adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"
	  locationBtn: false, 

	  // makes nav sticky on scroll
	  sticky     : false, 

	  // how fast the dropdown should open in milliseconds
	  openingSpeed: 250, 

	  // controls how long the dropdowns stay open for in milliseconds
	  closingDelay: 250, 

	  // 'static', 'top', 'left', 'right'
	  position: 'static', 

	  // shows dropdown arrows next to the items that have sub menus
	  showArrows: true, 

	  // adds a close button to the end of nav
	  closeBtn     : false, 

	  // fixes horizontal scrollbar issue on very long navs
	  scrollbarFix: false,

	  // enables mobile mode
	  mobileMode: false
	  
	});

  } );



	
