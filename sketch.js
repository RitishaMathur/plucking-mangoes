
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png")
	mangoImg = loadImage("Plucking mangoes/mango.png")
	stoneImg = loadImage("Plucking mangoes/stone.png")
	treeImg = loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine)

	//Create the Bodies Here.
	 
     ground = new Ground()
	 stone=new Stone(230,430,100)
	 mango1 =new Mango(1200,200,30)
	 mango2 = new Mango(1300,200,30)
     mango3 = new Mango(1100,250,30)
	 mango4 = new Mango(1500,250,30)
	 mango5 = new Mango(1400,250,30)
	 mango6 = new Mango(1300,300,30)
	 mango7 = new Mango(1200,300,30)
	 mango8 = new Mango(1250,150,30)
	 
	 
     chain = new Chain(stone.body,{x:230,y:430})
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(boyImg,200,350,200,300)
  stone.display();
  image(treeImg,1000,100,580,500)
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
  ground.display();
  chain.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 detectCollision(stone,mango8);
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
		chain.fly()
	}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:230,y:430})
		chain.attach(stone.body);
	}
}
