
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

let engine;
let world;

var ground,ground2,ground3,ground4;

var top_wall;
var ball,ball2;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.5,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   con = Matter.Constraint.create({
     pointA:{x:150,y:20},
     bodyB:ball,
     pointB:{x:0,y:0},
     length:100,
     stiffness:2,
     pointD:{x:250,y:20},
     pointC:{x:0,y:0}
   })



  
  

  ground =new Ground(200,390,400,20);
  ground2 = new Ground(400,200,40,400);
  ground3 = new Ground(0,200,40,400);


  ball = Bodies.circle(100,200,20,ball_options);
  ball2 = Bodies.circle(300,200,20,ball_options);

  World.add(world,ball);
  World.add(world,ball2);

  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointB.y,ball.position.x,ball.position.y)
  line(con.pointD.x,con.pointC.y,ball2.position.x,ball2.position.y)
  pop();
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ground.show();
  ground2.show();
  ground3.show();

  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.001,y:-0.05});
  Matter.Body.applyForce(ball2,{x:0,y:0},{x:-0.001,y:-0.05});
}
  


