/*
Title:			BrianCh.uk Home Screen Javascript ThreeJS Animation v1
Author:			Brian Chuk (brianch.uk)
Copyright: 		2015, Brian Chuk - All rights reserved (you have permission to use it, just tell me :D)
*/
// Creating the scene
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

// Interacting with the HTML
var $container = $('#canvas');
$container.append(renderer.domElement);

// Creating objects
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
cube.rotation.x += 0.1;
scene.add( cube );

camera.position.z = 5;


// Window resize settings
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

var move = 0.01;
var count = 1;
var rotationswag = 0;

// Rendering the scene
function render() {
	count++;
	if (count % 10 == 0) {
		var geometryy = new THREE.BoxGeometry( 1, 1, 1 );
		var materiall = new THREE.MeshBasicMaterial( { color: 0x6699ff } );
		var cubey = new THREE.Mesh( geometryy, materiall );
		scene.add( cubey );
		cubey.position.x = cube.position.x;
		rotationswag += 0.01;
		cubey.rotation.x += rotationswag;
		console.log(count);
		renderer.render( scene, camera );
	}
	console.log(count);
	if (count > 1000)
		scene.remove(cube);
	requestAnimationFrame( render );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube.position.x += move;
	if (cube.position.x >= 3 || cube.position.x <= -3)
		move *= -1;
	renderer.render( scene, camera );
}
render();