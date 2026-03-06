import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js";

let scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);

let camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0,10,20);
camera.lookAt(0,0,0);

const light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(10,20,10);
scene.add(light);

const ambient = new THREE.AmbientLight(0x888888);
scene.add(ambient);

function generateTerrain(){

for(let x=-20;x<20;x++){
for(let z=-20;z<20;z++){

let height = Math.random()*3;

const geo = new THREE.BoxGeometry(1,height+1,1);

const mat = new THREE.MeshStandardMaterial({
color:0x44aa44
});

const cube = new THREE.Mesh(geo,mat);

cube.position.set(x,height/2,z);

scene.add(cube);

}
}

}

generateTerrain();

const keys={};

document.addEventListener("keydown",e=>keys[e.key]=true);
document.addEventListener("keyup",e=>keys[e.key]=false);

function updatePlayer(){

let speed=0.2;

if(keys["w"]) camera.position.z-=speed;
if(keys["s"]) camera.position.z+=speed;
if(keys["a"]) camera.position.x-=speed;
if(keys["d"]) camera.position.x+=speed;

}

function animate(){

requestAnimationFrame(animate);

updatePlayer();

renderer.render(scene,camera);

}

animate();
