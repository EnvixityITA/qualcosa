const simplex = new SimplexNoise();

const chunkSize = 20;
const chunks = {};

function generateTerrain(){

loadChunk(0,0);

}

function loadChunk(cx,cz){

const key = cx+","+cz;

if(chunks[key]) return;

chunks[key] = true;

for(let x=0;x<chunkSize;x++){
for(let z=0;z<chunkSize;z++){

let worldX = cx*chunkSize + x;
let worldZ = cz*chunkSize + z;

let height = simplex.noise2D(worldX*0.05,worldZ*0.05)*10;

const geo = new THREE.BoxGeometry(1,height+1,1);

let color = getBiomeColor(worldX,worldZ,height);

const mat = new THREE.MeshStandardMaterial({color});

const block = new THREE.Mesh(geo,mat);

block.position.set(worldX,height/2,worldZ);

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
