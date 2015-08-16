$(document).ready(function() {

// NAVIGATION - STICKY ON SCROLL

	$('.nav-wrap').height($(".navbar").height());
	    
	$('.navbar').affix({
		offset: { top: $('.navbar').offset().top }
	});



// SERVICES - SLIDABLE GRID
	
	$('.service').click(function() {
		var $this = $(this);
		if ($this.hasClass("open")) {
                    
			$this.find('.service-description').animate({left: "100%"});
	        $this.removeClass("open");
		}
		else {
                 
			$this.find('.service-description').animate({left: "0"});
			$this.addClass("open");
			}
		});


// BOOTSTRAP CAROUSEL

	$('.carousel').carousel()
    
        


// PROGRESS BARS
   
	if (document.documentElement.clientWidth < 599) {
		
		$('.progress .progress-bar').progressbar();
				
	} else {
	
		$('.progress').onScreen({
		container: window,
		direction: 'vertical',
		doIn: function() {
			$('.progress .progress-bar').progressbar();
		},
			tolerance: 200,
			throttle: 50,
	});
	};

// CODING CIRCLES

	if (document.documentElement.clientWidth < 630) {
	
	$(".text").hide();
	$(".under-circles").show();
	
	} else {
	
	$(".under-circles").hide();

    $(".code-circles").css("opacity", 0);
    $(".code-circles").onScreen({
		tolerance: 200,
		toggleClass: false,
		doIn: function() {
    	 
			$(this).addClass('rollInLeft')
            $(this).css("opacity", "")
		}

    });
    };

    $(".code-circles").each(function() {
        var topHeight = $(".code-circles").height();
        var thisHeight = $(this).height();
        var topmargin = (topHeight - thisHeight) / 2;
        $(this).css("margin-top", topmargin);
    });
    
// PLACEHOLDER PLUG IN FOR CONTACT FORMS

	$('input, textarea').placeholder(); 

	 
    
// GOOGLE MAPS

	google.maps.event.addDomListener(window, 'load', init);
	
	var map;
	
	function init() {
	    var mapOptions = {
	        center: new google.maps.LatLng(40.66241,-73.927918),
	        zoom: 11,
	        zoomControl: true,
	        zoomControlOptions: {
	            style: google.maps.ZoomControlStyle.DEFAULT,
	        },
	        disableDoubleClickZoom: true,
	        mapTypeControl: true,
	        mapTypeControlOptions: {
	            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
	        },
	        scaleControl: true,
	        scrollwheel: false,
	        streetViewControl: true,
	        draggable : true,
	        overviewMapControl: true,
	        overviewMapControlOptions: {
	            opened: false,
	        },
	        mapTypeId: google.maps.MapTypeId.ROADMAP,
	    styles: [
	
	    // WATER
	
	    {
	      featureType: 'water',
	      elementType: 'geometry',
	      stylers: [{
	        color: '#258185'
	      }]
	    },
	
	    // LANDSCAPE
	
	    {
	      featureType: 'landscape.man_made',
	      elementType: 'geometry',
	      stylers: [{
	        color: '#f7f1df'
	      }]
	    },
	
	    {
	      featureType: 'landscape.natural',
	      elementType: 'geometry',
	      stylers: [{
	        color: '#fcfcfc'
	      }]
	    },
	
	    {
	      featureType: 'landscape.natural.terrain',
	      elementType: 'geometry',
	      stylers: [{
	        visibility: 'off'
	      }]
	    },
	
	    // POINTS OF INTEREST
	
	    {
	      featureType: 'poi.park',
	      elementType: 'geometry',
	      stylers: [{
	        color: '#85CC29'
	      }]
	    },
	
	    {
	      featureType: 'poi',
	      elementType: 'labels',
	      stylers: [{
	        visibility: 'off'
	      }]
	    },
	
	    {
	      featureType: 'poi.medical',
	      elementType: 'geometry',
	      stylers: [{
	        color: '#fbd3da'
	      }]
	    },
	
	    {
	      featureType: 'poi.business',
	      stylers: [{
	        visibility: 'off'
	      }]
	    },
	
	    // ROADS
	
	    {
	      featureType: 'road',
	      elementType: 'geometry.stroke',
	      stylers: [{
	        visibility: 'off'
	      }]
	    },
	
	    {
	      featureType: 'road',
	      elementType: 'labels',
	      stylers: [{
	        visibility: 'off'
	      }]
	    },
	
	    {
	      featureType: 'road.highway',
	      elementType: 'geometry.fill',
	      stylers: [{
	        color: '#F8C137'
	      }]
	    },
	
	    {
	      featureType: 'road.highway',
	      elementType: 'geometry.stroke',
	      stylers: [{
	        color: '#efd151'
	      }]
	    },
	
	    {
	      featureType: 'road.arterial',
	      elementType: 'geometry.fill',
	      stylers: [{
	        color: '#ffffff'
	      }]
	    },
	
	    {
	      featureType: 'road.local',
	      elementType: 'geometry.fill',
	      stylers: [{
	        color: 'black'
	      }]
	    },
	
	    // TRANSIT
	
	    {
	      featureType: 'transit.station.airport',
	      elementType: 'geometry.fill',
	      stylers: [{
	        color: '#255885'
	      }]
	    }
	
	  ],
	    
	    }
	
	    var mapElement = document.getElementById('mapcanvas');
	    var map = new google.maps.Map(mapElement, mapOptions);
	    
	    var locations = [
	        ['10th Street', 40.66949, -73.995023]
	    ];

	
	    for (i = 0; i < locations.length; i++) {
	        marker = new google.maps.Marker({
	            icon: '',
	            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	            map: map
	        });
	    }
	   
	}

// mobile stuff


if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

    
});

 


