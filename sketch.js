
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
     
	//Create the Bodies Here.
	roofObject = new Roof(470,100,250,30);
	startBobPositionX=width/2; 
	startBobPositionY=height/4+500; 
    bobDiameter = 40;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter); 
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	/*rope1 = new Rope(roofObject.body,bobObject1.body,*2,0);
	rope2 = new Rope(roofObject.body,bobObject2.body,40*2,0);
	rope3 = new Rope(roofObject.body,bobObject3.body,40*2,0);
	rope4 = new Rope(roofObject.body,bobObject4.body,40*2,0);
	rope5 = new Rope(roofObject.body,bobObject5.body,40*2,0);*/

	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0) 
	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0) 
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0) 
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0) 
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(88);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-120,y:-90})
	}
}

