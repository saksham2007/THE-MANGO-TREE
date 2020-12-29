
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango2,mango3,mango4,mango5
var boy

function preload()
{
	boyImage=loadImage("images/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Constraintstone =new Stone(280,180,80,PI/2)

	stone1 =new Stone(40,550,30)

	mango1 = new Mango(400,410,50)
	mango2 = new Mango(530,350,50)
	mango3 = new Mango(600,290,50)
	mango4 = new Mango(650,370,50)

	ground1 =new Ground(400,height,799,20);

	tree1 = new Tree(500,350,20,20)

	boy = createSprite(100,610,20,20)
	boy.addImage(boyImage)
	boy.scale=0.12

	launcher = new Launcher(stone1.body,{x:40, y:550});

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

 
  
  drawSprites();

 
  tree1.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  stone1.display()
  ground1.display()

  detectcollision(stone1,mango1)
  detectcollision(stone1,mango2)
  detectcollision(stone1,mango3)
  detectcollision(stone1,mango4)


 
}


function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
     launcher.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body,{x:40,y:550})
		launcher.attach(stone1.body)
	}
}

function detectcollision(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false)
}
}



