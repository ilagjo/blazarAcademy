import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color('rgb(13, 89, 133)');
scene.fog = new THREE.Fog(0x76456c, 0.1, 8);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );

scene.add( cube );

camera.position.z = 5;

window.addEventListener('resize', resizing)
 function resizing(){
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.render( scene, camera );
 }

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.04;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}

animate();
