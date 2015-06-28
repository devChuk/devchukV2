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
camera.position.y = 5;
camera.rotation.x = -0.8;


// Window resize settings
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

var geometry = new THREE.BoxGeometry( 1, 1, 1 );

	
var objects = {};
var count = 0;
var index = 0;
// var colors = ['0xFFEBEE', '0xFFCDD2', '0xEF9A9A', '0xE57373', '0xEF5350', '0xF44336', '0xE53935', '0xD32F2F', '0xC62828', '0xB71C1C'];
var colors = ['0xF44336', '0x9C27B0', '0x2196F3', '0x4CAF50', '0xFFEB3B', '0xFF5722'];
var light = new THREE.PointLight( 0xffffff, 1, 0 );
light.position.set( 0, 10, 30 );
scene.add( light );

// Rendering the scene
function render() {
	requestAnimationFrame( render );
	count++;
	if (count % 10 == 0) {
		for (var i = -30; i < 31; i++) {
			var pls = colors[Math.floor(Math.random() * 6)];//'0x'+Math.floor(Math.random()*16777215).toString(16);
			var materialz = new THREE.MeshPhongMaterial( { color: 0x6699ff } );
			var cube = new THREE.Mesh( geometry, materialz );
			scene.add( cube );
			cube.position.x += i;
			cube.material.color.setHex( pls );
			objects[index++] = cube;
		}
	}
	for (var i in objects) {
		objects[i].position.z += 0.1;
		if (objects[i].position.z >= 30) {
			scene.remove(objects[i]);
			delete objects[i];
		}
	}

	// console.log(count++);
	// if (count % 10 == 0) {	
		// var pls = '0x'+Math.floor(Math.random()*16777215).toString(16);
		// var materialz = new THREE.MeshBasicMaterial( { color: 0x6699ff } );
		// var cube = new THREE.Mesh( geometry, materialz ); 
	// 	cube.material.color.setHex( pls );
		// scene.add( cube );
	// 	objects.push(cube);
	// }

	// for (var i = 0; i < objects.length; i++) {
	// 	objects[i].position.z += 0.1;
	// 	if (objects[i].position.z >= 30)
	// 		scene.remove(objects[i]);
	// }



	renderer.render( scene, camera );
}
render();