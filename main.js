import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js";
import SimplexNoise from "https://cdn.jsdelivr.net/npm/simplex-noise@4.0.1/+esm";

const simplex = new SimplexNoise();

let scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

let camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0,20,20);

const light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(50,50,50);
scene.add(light);

const ambient = new THREE.AmbientLight(0x888888);
scene.add(ambient);

const chunkSize = 20;
const chunks = {};

function getBiomeColor(x,z,height){

let biome = Math.sin(x*0.01)*Math.cos(z*0.01);

if(height < -2) return 0x3366ff;
if(biome > 0.4) return 0x228B22;
if(biome < -0.3) return 0xEDC9AF;

return 0x88cc44;

}

function loadChunk(cx,cz){

let key = cx+","+cz;
if(chunks[key]) return;

chunks[key] = true;

for(let x=0;x<chunkSize;x++){
for(let z=0;z<chunkSize;z++){

let wx = cx*chunkSize+x;
let wz = cz*chunkSize+z;

let height = simplex.noise2D(wx*0.05,wz*0.05)*10;

let geo = new THREE.BoxGeometry(1,height+1,1);
let mat = new THREE.MeshStandardMaterial({
color:getBiomeColor(wx,wz,height)
});

let block = new THREE.Mesh(geo,mat);

block.position.set(wx,height/2,wz);

scene.add(block);

}
}

}

function updateTerrain(){

let cx = Math.floor(camera.position.x/chunkSize);
let cz = Math.floor(camera.position.z/chunkSize);

for(let x=-2;x<=2;x++){
for(let z=-2;z<=2;z++){

loadChunk(cx+x,cz+z);

}
}

}

const keys={};

document.addEventListener("keydown",e=>keys[e.key]=true);
document.addEventListener("keyup",e=>keys[e.key]=false);

document.body.onclick=()=>document.body.requestPointerLock();

document.addEventListener("mousemove",e=>{

if(document.pointerLockElement){

camera.rotation.y-=e.movementX*0.002;
camera.rotation.x-=e.movementY*0.002;

}

});

function updatePlayer(){

const speed=0.4;

if(keys["w"]) camera.position.z-=speed;
if(keys["s"]) camera.position.z+=speed;
if(keys["a"]) camera.position.x-=speed;
if(keys["d"]) camera.position.x+=speed;

}

function animate(){

requestAnimationFrame(animate);

updatePlayer();
updateTerrain();

renderer.render(scene,camera);

}

animate();
