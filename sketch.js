const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1, ball2, ball3, ball4, ball5;
var roof, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball1 = new Ball(400,400);
	ball2 = new Ball(450,400);
	ball3 = new Ball(500,400);
	ball4 = new Ball(350,400);
	ball5 = new Ball(300,400);
  roof = new Ground(400,200,300,15); 
  rope1 = new Rope(ball1.body, roof.body, 0, 0);``
  rope2 = new Rope(ball2.body, roof.body,50,0);
  rope3 = new Rope(ball3.body, roof.body,100, 0);
  rope4 = new Rope(ball4.body, roof.body, -50, 0);
  rope5 = new Rope(ball5.body, roof.body, -100, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Green");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  drawSprites();
 }
 function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball3.body, ball5.body.position,{x:50,y:-20});
   }
 }
