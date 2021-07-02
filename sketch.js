
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	
	box=new Box(400,200,230,10);
	bob1= new Bob(320,375,30);
	rope=new String(bob1.body,{x:box.body.position.x-80,y:box.body.position.y});
	bob2= new Bob(360,375,30);
	bob3= new Bob(400,375,30);
	bob4= new Bob(440,375,30);
	bob5= new Bob(480,375,30);
	rope2=new String(bob2.body,{x:box.body.position.x-40,y:box.body.position.y});
	rope3=new String(bob3.body,{x:box.body.position.x,y:box.body.position.y});
	rope4=new String(bob4.body,{x:box.body.position.x+40,y:box.body.position.y});
	rope5=new String(bob5.body,{x:box.body.position.x+80,y:box.body.position.y});
	

}


function draw() {
  background(0);
  Engine.update(engine);
  box.display();
  rope.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope2.display();
  rope3.display()
  rope4.display();
  rope5.display();
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}

