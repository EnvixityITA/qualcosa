let scene, camera, renderer;

init();
generateWorld();
animate();

function init() {

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0, 40, 80);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(50, 50, 50);
scene.add(light);

const ambient = new THREE.AmbientLight(0x404040);
scene.add(ambient);

}

function animate() {

requestAnimationFrame(animate);

renderer.render(scene, camera);

}
