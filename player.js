let velocity = {x:0,z:0};
const speed = 0.3;

const keys = {};

document.addEventListener("keydown",e=>keys[e.key]=true);
document.addEventListener("keyup",e=>keys[e.key]=false);

function initPlayer(){

document.body.requestPointerLock();

document.addEventListener("mousemove",e=>{

camera.rotation.y -= e.movementX * 0.002;
camera.rotation.x -= e.movementY * 0.002;

});

}

function updatePlayer(){

if(keys["w"]) camera.position.z -= speed;
if(keys["s"]) camera.position.z += speed;
if(keys["a"]) camera.position.x -= speed;
if(keys["d"]) camera.position.x += speed;

}
