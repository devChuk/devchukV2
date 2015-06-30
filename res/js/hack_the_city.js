/*
Title:			BrianCh.uk Home Screen Javascript ThreeJS Animation v1
Author:			Brian Chuk (brianch.uk)
Copyright: 		2015, Brian Chuk - All rights reserved (you have permission to use it, just tell me :D)
*/
/*
Art Inspirations
http://imgur.com/gallery/y33EY
http://imgur.com/2xx8BrK
http://turnislefthome.tumblr.com/post/121867827385/excited-to-have-an-illustration-in-the-new



https://www.google.com/search?q=low+poly+whale+threejs&espv=2&biw=1855&bih=995&source=lnms&tbm=isch&sa=X&ei=MMqQVfjfGoPn-QGsnJ3IBg&ved=0CAYQ_AUoAQ#tbm=isch&q=low+poly+art+whale&imgrc=n5M9MEsRfrWWBM%3A
https://vimeo.com/61510123

*/

var count, index, objects, scene, geometry, camera, roads, raycaster, grower;
var renderer = new THREE.WebGLRenderer();
var mouse = new THREE.Vector2(), INTERSECTED;

function please() {
	var intersects = raycaster.intersectObjects( scene.children );
	if ( intersects.length > 0 )
		if ( INTERSECTED != intersects[ 0 ].object ) {
			INTERSECTED = intersects[ 0 ].object;
			INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
			grower = INTERSECTED;
		}
	else {
		INTERSECTED = null;
	}
}

function onDocumentMouseMove(event) {
	event.preventDefault();
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function init() {
	// Creating the scene
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		camera.position.z = 30;
		camera.position.y = 5;
		camera.rotation.x = -0.8;
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );

	// Interacting with the HTML
	var $container = $('#canvas');
	$container.append(renderer.domElement);

	// Window resize settings
	window.addEventListener( 'resize', onWindowResize, false );
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	geometry = new THREE.BoxGeometry( 1, 1, 1 );
	objects = {};
	count = 0;
	index = 0;
	roads = [-10, -9, -8, -1, 0, 1, 8, 9, 10];
	colors = ['0xF44336', '0x9C27B0', '0x2196F3', '0x4CAF50', '0xFFEB3B', '0xFF5722'];
	var light = new THREE.PointLight( 0xffffff, 1, 0 );
	light.position.set( 0, 10, 30 );
	scene.add( light );
	raycaster = new THREE.Raycaster();
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
}

// Rendering the scene
function render() {
	raycaster.setFromCamera( mouse, camera );
	count++;
	if (count % 11 == 0)
		for (var i = -30; i < 31; i++)
			if (roads.indexOf(i) == -1) {
				var pls = colors[Math.floor(Math.random() * 6)];//'0x'+Math.floor(Math.random()*16777215).toString(16);
				var materialz = new THREE.MeshPhongMaterial( { color: 0x6699ff } );
				var cube = new THREE.Mesh( geometry, materialz );
				scene.add( cube );
				cube.position.x += 1.1 * i;
				cube.material.color.setHex( pls );
				objects[index++] = cube;
			}

	if (grower && count > 300)
		grower.scale.y += 0.5;

	for (var i in objects) {
		objects[i].position.z += 0.1;
		if (objects[i].position.z >= 30) {
			scene.remove(objects[i]);
			delete objects[i];
		}
	}

	please();
	renderer.render( scene, camera );
}


function animate() {
	requestAnimationFrame( animate );
	render();
}

init();
animate();