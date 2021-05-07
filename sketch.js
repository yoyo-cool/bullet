var bullet,wall;
var speed,weight;
var deformity,thickness,damage;


function setup() {
  createCanvas(1600,400)
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50,200,50,30)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=(80,80,80)
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
if(bullet.x-wall.x<=wall.width/2+bullet.width/2 &&
  wall.x-bullet.x<=wall.width/2+bullet.width/2 &&
  bullet.y-wall.y<=wall.height/2+bullet.height/2 &&
  wall.y-bullet.y<=wall.height/2+bullet.height/2 ){
    bullet.velocityX=0
    damage=((0.5*weight*speed*speed)/thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="green"
    }else {
      wall.shapeColor="red"
    }
  }
drawSprites();
}