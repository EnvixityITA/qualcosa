function meteor(){

const geo = new THREE.SphereGeometry(2,16,16);
const mat = new THREE.MeshStandardMaterial({color:0xff3300});

const rock = new THREE.Mesh(geo,mat);

rock.position.set(
camera.position.x + Math.random()*20-10,
40,
camera.position.z + Math.random()*20-10
);

scene.add(rock);

function fall(){

rock.position.y -= 0.6;

if(rock.position.y > 0){

requestAnimationFrame(fall);

}else{

explode(rock.position);

scene.remove(rock);

}

}

fall();

}

function explode(pos){

scene.children.forEach(obj=>{

if(obj.position){

let dist = obj.position.distanceTo(pos);

if(dist < 6){

scene.remove(obj);

}

}

});

}

function earthquake(){

scene.children.forEach(obj=>{

if(obj.position){

obj.position.y += (Math.random()-0.5)*1.5;

}

});

}

function tornado(){

const geo = new THREE.CylinderGeometry(1,4,12,16);
const mat = new THREE.MeshStandardMaterial({color:0xaaaaaa});

const tor = new THREE.Mesh(geo,mat);

tor.position.copy(camera.position);

scene.add(tor);

function spin(){

tor.rotation.y += 0.3;

tor.position.x += Math.sin(Date.now()*0.002);

requestAnimationFrame(spin);

}

spin();

}

}
