/*
Title:			BrianCh.uk Home Screen Javascript v1
Author:			Brian Chuk (brianch.uk)
Copyright: 		2015, Brian Chuk - All rights reserved (you have permission to use it, just tell me :D)
*/
var mobile = false;
	if (window.innerWidth <= 767) {
		mobile = true;
	}

// var animated = true;
// if (window.innerWidth > 991) {
// 	var hack_the_city = document.createElement('script');
// 	hack_the_city.src = './res/js/hack_the_city.js';
// 	hack_the_city.type = 'text/javascript';
// 	document.body.appendChild(hack_the_city);
// }
// else {animated = false;}

$( window ).resize(function() {
	
	// if (!animated && window.innerWidth > 991) {
	// 	var hack_the_city = document.createElement('script');
	// 	hack_the_city.src = './res/js/hack_the_city.js';
	// 	hack_the_city.type = 'text/javascript';
	// 	document.body.appendChild(hack_the_city);
	// 	animated = true;
	// }

	if (window.innerWidth <= 767) {
		mobile = true;
		$(".profile").hide();
	}
	else {
		mobile = false;
		$("#profile").show();
	}

});

$("#detail1").click(function () {
	if (!mobile)
		$( "#profile" ).finish().slideUp( 50, function() {
		    $( "#profile1" ).finish().slideDown("fast");});
	else
		document.location = "http://www.nyu.edu/";
}).mouseout(function () {
	if (!mobile)
		$( "#profile1" ).finish().slideUp( 50, function() {
	    	$( "#profile" ).finish().slideDown("fast");});
});

$("#detail2").click(function () {
	if (!mobile)
		$( "#profile" ).finish().slideUp( 50, function() {
	    	$( "#profile2" ).finish().slideDown("fast");});
	else document.location = "http://www.syncano.com";
}).mouseout(function () {
	if (!mobile)
		$( "#profile2" ).finish().slideUp( 50, function() {
	    	$( "#profile" ).finish().slideDown("fast");});
});

$("#detail3").click(function () {
	if (!mobile)
		$( "#profile" ).finish().slideUp( 50, function() {
	    	$( "#profile3" ).finish().slideDown("fast");})
	else document.location = "http://hackny.org/a/fellows/";
}).mouseout(function () {
	if (!mobile)
		$( "#profile3" ).finish().slideUp( 50, function() {
	    	$( "#profile" ).finish().slideDown("fast");});
});

$("#detail4").click(function () {
	if (!mobile)
		$( "#profile" ).finish().slideUp( 50, function() {
	    	$( "#profile4" ).finish().slideDown("fast");});
	else document.location = "http://betterpath.com";
}).mouseout(function () {
	if (!mobile)
		$( "#profile4" ).finish().slideUp( 50, function() {
	    	$( "#profile" ).finish().slideDown("fast");});
});

$("#detail5").click(function () {
	if (!mobile)
		$( "#profile" ).finish().slideUp( 50, function() {
	    	$( "#profile5" ).finish().slideDown("fast");});
	else document.location = "http://kiteandrocket.com";
}).mouseout(function () {
	if (!mobile)
		$( "#profile5" ).finish().slideUp( 50, function() {
	    	$( "#profile" ).finish().slideDown("fast");});
});