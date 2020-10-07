const World = Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;


var engine,world;

var ground,ball;

function setup() {

  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

var ground_option ={ 
  isStatic:true
}
  ground=Bodies.rectangle(200,390,300,20,ground_option);
  World.add(world,ground);

  var ball_option={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,ball_option);
  World.add(world,ball);
  

 /* console.log(object);
  console.log(object.type); 
  console.log(object.position.y);
  console.log(object.position.x);*/
 
}

function draw() {
  background("yellow"); 
  Engine.update(engine);
  rectMode(CENTER); 
  ellipseMode(RADIUS);
  fill("brown");
  rect(ground.position.x,ground.position.y,300,20);
  fill("purple");
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}