/*
Title:			BrianCh.uk Home Screen Javascript ThreeJS Animation v1
Author:			Brian Chuk (brianch.uk)
Copyright: 		2015, Brian Chuk - All rights reserved (you have permission to use it, just tell me :D)

I would use some of my other animations for the background, but I've found that it was too distracting haha.
Test users would just stare at the animation & not realize that they could scroll down haha

*/

var container;

var camera, scene, renderer;

var geometry, group;

var mouseX = 0, mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

init();
animate();

function init() {

	container = document.createElement( 'div' );
	var $containerz = $('#canvas');
	$containerz.append(container);

	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 500;

	scene = new THREE.Scene();

	var geometry = new THREE.BoxGeometry( 100, 100, 100 );

	group = new THREE.Group();

	var colors = ['0xF44336', '0x9C27B0', '0x2196F3', '0x4CAF50', '0xFFC107', '0xFF5722'];

	for ( var i = 0; i < 1000; i ++ ) {

		var pls = colors[Math.floor(Math.random() * 6)];

		var material = new THREE.MeshBasicMaterial();

		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.x = Math.random() * 2000 - 1000;
		mesh.position.y = Math.random() * 2000 - 1000;
		mesh.position.z = Math.random() * 2000 - 1000;

		mesh.rotation.x = Math.random() * 2 * Math.PI;
		mesh.rotation.y = Math.random() * 2 * Math.PI;

		mesh.material.color.setHex( pls );

		mesh.matrixAutoUpdate = false;
		mesh.updateMatrix();

		group.add( mesh );

	}

	scene.add( group );

	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor( "#0D47A1" ); //2980B9
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.sortObjects = false;

	container.appendChild( renderer.domElement );

//

window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove(event) {

	mouseX = ( event.clientX - windowHalfX ) * 10;
	mouseY = ( event.clientY - windowHalfY ) * 10;

}

//

function animate() {

	requestAnimationFrame( animate );

	render();

}

function render() {

	var time = Date.now() * 0.001;

	var rx = Math.sin( time * 0.7 ) * 0.5,
		ry = Math.sin( time * 0.3 ) * 0.5,
		rz = Math.sin( time * 0.2 ) * 0.5;

	// camera.position.x += ( mouseX - camera.position.x ) * .05;
	// camera.position.y += ( - mouseY - camera.position.y ) * .05;

	camera.lookAt( scene.position );

	group.rotation.x = rx;
	group.rotation.y = ry;
	group.rotation.z = rz;

	renderer.render( scene, camera );

}