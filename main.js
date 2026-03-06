let scene, camera, renderer;
let world;

init();

function init(){

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0,20,20);

initPhysics();
initPlayer();
generateTerrain();

animate();

}

function animate(){

requestAnimationFrame(animate);

updatePlayer();
updateTerrain();

world.step(1/60);

renderer.render(scene,camera);

}
