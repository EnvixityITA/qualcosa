const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

canvas.width = 800
canvas.height = 400

let gravity = 0.6
let speed = 6

const player = {
x:100,
y:300,
size:40,
velY:0,
jump:false
}

let obstacles = [
{x:600,y:320,size:40},
{x:900,y:320,size:40},
{x:1200,y:320,size:40}
]

document.addEventListener("keydown",e=>{

if(e.code==="Space" && !player.jump){

player.velY = -12
player.jump = true

}

})

function update(){

player.velY += gravity
player.y += player.velY

if(player.y > 300){

player.y = 300
player.velY = 0
player.jump = false

}

obstacles.forEach(o=>{
o.x -= speed

if(o.x + o.size < 0){

o.x = canvas.width + Math.random()*400

}

if(
player.x < o.x + o.size &&
player.x + player.size > o.x &&
player.y < o.y + o.size &&
player.y + player.size > o.y
){
resetGame()
}

})

}

function resetGame(){

player.y = 300
player.velY = 0

obstacles.forEach((o,i)=>{
o.x = 600 + i*300
})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle = "white"
ctx.fillRect(0,340,800,60)

ctx.fillStyle = "cyan"
ctx.fillRect(player.x,player.y,player.size,player.size)

ctx.fillStyle = "red"

obstacles.forEach(o=>{
ctx.beginPath()
ctx.moveTo(o.x,o.y+o.size)
ctx.lineTo(o.x+o.size/2,o.y)
ctx.lineTo(o.x+o.size,o.y+o.size)
ctx.fill()
})

}

function gameLoop(){

update()
draw()

requestAnimationFrame(gameLoop)

}

gameLoop()
