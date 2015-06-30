/*
Title:			BrianCh.uk Home Screen Javascript v1
Author:			Brian Chuk (brianch.uk)
Copyright: 		2015, Brian Chuk - All rights reserved (you have permission to use it, just tell me :D)
*/
var mobile = false;
	if (window.innerWidth <= 767) {
		mobile = true;
	}

var animated = true;
if (window.innerWidth > 991) {
	var hack_the_city = document.createElement('script');
	hack_the_city.src = './res/js/anim.js';
	hack_the_city.type = 'text/javascript';
	document.body.appendChild(hack_the_city);
}
else {animated = false;}

$( window ).resize(function() {
	
	if (!animated && window.innerWidth > 991) {
		var hack_the_city = document.createElement('script');
		hack_the_city.src = './res/js/anim.js';
		hack_the_city.type = 'text/javascript';
		document.body.appendChild(hack_the_city);
		animated = true;
	}

	if (window.innerWidth <= 767) {
		mobile = true;
		$(".profile").hide();
	}
	else {
		mobile = false;
		$("#profile").show();
	}

});

var current = "#profile";

$("#detail1").click(function () {
	if (!mobile)
		$( current ).finish().slideUp( 50, function() {
		    if ("#profile1" == current) {
		    	$( "#profile" ).finish().slideDown("fast");
		    	current = "#profile";
		    }
		    else {
			    $( "#profile1" ).finish().slideDown("fast");
			    current = "#profile1";
			}
		});
	else
		document.location = "http://www.nyu.edu/";
});

$("#detail2").click(function () {
	if (!mobile)
		$( current ).finish().slideUp( 50, function() {
	    	if ("#profile2" == current) {
		    	$( "#profile" ).finish().slideDown("fast");
		    	current = "#profile";
		    }
		    else {
			    $( "#profile2" ).finish().slideDown("fast");
			    current = "#profile2";
			}
	    });
	else document.location = "http://www.syncano.com";
});

$("#detail3").click(function () {
	if (!mobile)
		$( current ).finish().slideUp( 50, function() {
	    	if ("#profile3" == current) {
		    	$( "#profile" ).finish().slideDown("fast");
		    	current = "#profile";
		    }
		    else {
			    $( "#profile3" ).finish().slideDown("fast");
			    current = "#profile3";
			}
	    });
	else document.location = "http://hackny.org/a/fellows/";
});

$("#detail4").click(function () {
	if (!mobile)
		$( current ).finish().slideUp( 50, function() {
	    	if ("#profile4" == current) {
		    	$( "#profile" ).finish().slideDown("fast");
		    	current = "#profile";
		    }
		    else {
			    $( "#profile4" ).finish().slideDown("fast");
			    current = "#profile4";
			}
	    });
	else document.location = "http://betterpath.com";
});

$("#detail5").click(function () {
	if (!mobile)
		$( current ).finish().slideUp( 50, function() {
	    	if ("#profile5" == current) {
		    	$( "#profile" ).finish().slideDown("fast");
		    	current = "#profile";
		    }
		    else {
			    $( "#profile5" ).finish().slideDown("fast");
			    current = "#profile5";
			}
	    });
	else document.location = "http://kiteandrocket.com";
});