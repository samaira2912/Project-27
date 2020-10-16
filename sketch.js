
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new BobClass(200,500,30);
	bobObject2 = new BobClass(250,500,30);
	bobObject3 = new BobClass(300,500,30);
	bobObject4 = new BobClass(350,500,30);
	bobObject5 = new BobClass(400,500,30);
	roof = new RoofClass(300,200,300,40);
	rope1 = new RopeClass(bobObject1.body,{x:200, y:200});
	rope2 = new RopeClass(bobObject2.body,{x:250, y:200});
	rope3 = new RopeClass(bobObject3.body,{x:300, y:200});
	rope4 = new RopeClass(bobObject4.body,{x:350, y:200});
	rope5 = new RopeClass(bobObject5.body,{x:400, y:200});
		
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 
  drawSprites();
 
}




function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, { x: -200, y: -200 })
	}
}
