function generateWorld(){

const size = 50;

for(let x = -size; x < size; x++){
for(let z = -size; z < size; z++){

const height = Math.random() * 4;

const geometry = new THREE.BoxGeometry(1, height, 1);
const material = new THREE.MeshStandardMaterial({
color: 0x2ecc71
});

const cube = new THREE.Mesh(geometry, material);

cube.position.set(x, height/2, z);

scene.add(cube);

}
}

}
