function spawnMeteor(){

const geometry = new THREE.SphereGeometry(2,16,16);
const material = new THREE.MeshStandardMaterial({color:0xff5500});

const meteor = new THREE.Mesh(geometry,material);

meteor.position.set(
(Math.random()-0.5)*50,
50,
(Math.random()-0.5)*50
);

scene.add(meteor);

function fall(){

meteor.position.y -= 0.5;

if(meteor.position.y > 0){
requestAnimationFrame(fall);
}else{
scene.remove(meteor);
}

}

fall();

}



function spawnEarthquake(){

scene.children.forEach(obj=>{

if(obj.geometry){

obj.position.y += (Math.random()-0.5)*2;

}

});

}



function spawnTornado(){

const geo = new THREE.CylinderGeometry(0.5,3,10,16);
const mat = new THREE.MeshStandardMaterial({color:0xaaaaaa});

const tornado = new THREE.Mesh(geo,mat);

tornado.position.set(
(Math.random()-0.5)*30,
5,
(Math.random()-0.5)*30
);

scene.add(tornado);

let t = 0;

function spin(){

t += 0.1;

tornado.rotation.y += 0.3;
tornado.position.x += Math.sin(t);

requestAnimationFrame(spin);

}

spin();

}



function spawnFlood(){

scene.children.forEach(obj=>{

if(obj.geometry){

obj.position.y += 0.5;

}

});

}
