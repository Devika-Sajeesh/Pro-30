const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var ground1,stand1,stand2;
var slingshot;
var stand3;

var block1,block2,block3,block4,block5,block6;
var block7,block8,block9,block10,block11,block12;
var block13,block14,block15,block16,block17,block18;
var block19,block20,block21,block22,block23,block24;
var pentagon;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

    pentagon = new Box(100,300,50,50);

    ground1 = new Ground(400,390,800,20);

    stand1 = new Ground(405,245,185,10);
    stand2 = new Ground(700,110,230,10);
    //stand3 = new Ground(100,350,100,10);
    

    block1 = new Block(420,235,30,30);
    block2 = new Block(360,235,30,30);
    block3 = new Block(390,235,30,30);
    block4 = new Block(420,235,30,30);
    block5 = new Block(450,235,30,30);
    block6 = new Block(390,235,30,30);

    block7 = new Block(330,235,30,30);
    block8 = new Block(360,235,30,30);
    block9 = new Block(390,235,30,30);
    block10 = new Block(420,235,30,30);
    block11 = new Block(450,235,30,30);
    block12 = new Block(475,235,30,30);

    block13 = new Block(720,100,30,30);
    block14 = new Block(660,100,30,30);
    block15 = new Block(690,100,30,30);
    block16 = new Block(720,100,30,30);
    block17 = new Block(750,100,30,30);
    block18 = new Block(690,100,30,30);

    block19 = new Block(630,100,30,30);
    block20 = new Block(660,100,30,30);
    block21 = new Block(690,100,30,30);
    block22 = new Block(720,100,30,30);
    block23 = new Block(750,100,30,30);
    block24 = new Block(775,100,30,30);

    slingshot = new SlingShot(pentagon.body,{x:100,y:300});

    

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);
  
  Engine.update(engine);

  fill("white");
  textSize(20);
  text("Hit the blocks by dragging the mouse",100,30);
  text("Press space bar to return the pentagon",100,60);
  textFont("JOKERMAN");

  drawSprites();

  ground1.display();

  stand1.display();
  stand2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display(); 
  block6.display(); 

  block7.display(); 
  block8.display(); 
  block9.display(); 
  block10.display(); 
  block11.display(); 
  block12.display();

  block13.display(); 
  block14.display(); 
  block15.display(); 
  block16.display(); 
  block17.display(); 
  block18.display(); 

  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  //block25.display();

  pentagon.display();

  slingshot.display();

  //stand3.display();

  //mouseDragged();
  //mouseReleased();



}
function mouseDragged(){
  Matter.Body.setPosition(pentagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
      slingshot.attach(pentagon.body);
  }
}