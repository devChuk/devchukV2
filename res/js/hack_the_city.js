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

camera.position.z = 30;
camera.position.y = 2;


// Window resize settings
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	
var objects = [];
var count = 0;

// Rendering the scene
function render() {
	requestAnimationFrame( render );
	count++;
	if (count % 10 == 0) {	
		var pls = '0x'+Math.floor(Math.random()*16777215).toString(16);
		var materialz = new THREE.MeshBasicMaterial( { color: 0x6699ff } );
		var cube = new THREE.Mesh( geometry, materialz );
		cube.material.color.setHex( pls );
		scene.add( cube );
		objects.push(cube);
	}

	for (var i = 0; i < objects.length; i++) {
		objects[i].position.z += 0.1;
		if (objects[i].position.z >= 30)
			scene.remove(objects[i]);
	}



	renderer.render( scene, camera );
}
render();