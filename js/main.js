jQuery(document).ready(function($){

	/*"use strict";
*/
	$(window).bind("load", function(){
		$.when(
			$('.preloader').fadeOut(2000),
			$("body").scrollTop(0)
		).done(function(){
			$("#wrapper").fadeTo('opacity', 1);
		});

	// Slogan animations //

		setTimeout(function(){
			$('.logo').addClass('animated fadeInDown');
		}, 2000);
		
		setTimeout(function(){
			$('.slogan_1').not('h1.slogan_1 span').addClass('animated bounceIn');

		$('.slogan_1').not('h1.slogan_1 span').addClass('animated bounceIn');


		$('.slogan_1').not('h1.slogan_1 span').addClass('animated bounceIn');

		},3000);
			setTimeout(function(){
		$('.slogan_2').addClass('animated bounceIn');
		},4000);

			setTimeout(function(){
		$('h1.slogan_1 span').addClass('animated bounceIn');
		},5000);		
	});
	
	
	/*============================================
	Scroll Menu
	==============================================*/	

		setTimeout(function(){
		$('h1.slogan_1 span').addClass('animated bounceIn');
		},5000);		

	
	/*============================================
	Refresh scrollSpy function
	==============================================*/

	function scrollSpyRefresh(){
		setTimeout(function(){
			$('body,html').scrollspy('refresh');
		},1000);
	}	
	

	/*============================================
	Scroll Menu
	==============================================*/
	
	$('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 100 
        }, 1500, 'easeInOutExpo');
        event.preventDefault();        
    });

    /*$("#mainNav").affix({


        offset: {
            top: 100
        }
    });*/

    /*============================================
	Section title animations
	==============================================*/

    var titleWaypoint = $('.section-title,.section-title-inv').waypoint(function(direction) {
        //check the direction
        if(direction == 'down') {
            $(this.element).addClass('animated fadeInDown');            
            	this.destroy();
        }
    }, { offset: '80%'}
    );

   /*============================================
	Section animations
	==============================================*/	
 	
 		// INFO SECTION //
		$('#info').waypoint(function(){
			$('.about-img').addClass('animated fadeInLeft');
	    	$('.about-info').addClass('animated fadeInRightBig');

		}, {offset: '80%'}
		);

    	// WHAT I WORK SECTION //
		$('.work-icon').waypoint(function(){
			$('.work-icon').addClass('animated fadeInUp');


		}, {offset: '80%'}
		);

		// RECENT WORKS SECTION //
		$('#portfolio').waypoint(function(){
			$('.recent-work-item').addClass('animated fadeInUp')
				},	
			

		 {offset: '80%'}
		 );
		

	/*============================================
	SKILLS animations
	============================================*/
	$('.chart').waypoint(function(direction){   	
		$('.chart').each(function(){			
			$(this).easyPieChart({
					size:200,
					animate: 3000,
					lineCap:'butt',
					scaleColor: false,
					trackColor: 'transparent',
					barColor: '#2098d1',
					lineWidth: 10,
					easing:'easeOutQuad'
				});
		
			});	
	},{offset:'80%'});



	//  TESTIMONIALS CAROUSEL HOOK
		        $('#customers-testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,
		            dots: false,
		            navigation: false,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 3
		              }
		            }
		        });
      

    
 	// Init waypoint animations //
 	var waypoint = new Waypoint({
	  	element: document.getElementById('info'),
	  	handler: function(direction) {
	    $('.about-img').addClass('animated fadeInLeft');
	    $('.about-info').addClass('animated fadeInRightBig ');
	    $('.section-title.about').addClass('animated fadeInDown');
	      }, 
	       offset: ($(window).height() / 1.8)   });



 	// Init ISOTOPE.js //
	var $grid = $('.grid').isotope({
		itemSelector: '.recent-work-item',  			
		isFitWidth: true  			
	});

	// filter items on button click
		$('.filters-button-group').on( 'click', '.button', function() {
		  var filterValue = $(this).attr('data-filter');

		$grid.isotope({ filter: filterValue }); 	
		});				

});






