var world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon;

function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;

  stand1 = new Ground(400, 260, 220, 10);

  //stand1 - level one
  block1 = new Box(330, 235, 30, 40);
  block2 = new Box(365, 235, 30, 40);
  block3 = new Box(400, 235, 30, 40);
  block4 = new Box(435, 235, 30, 40);
  block5 = new Box(470, 235, 30, 40);

  //stand1 - level two
  block6 = new Box(365, 195, 30, 40);
 block7 = new Box(400, 195, 30, 40);
  block8 = new Box(435, 195, 30, 40);

  //stand1 - level three
  block9 = new Box(400, 155, 30, 40);
  

  stand2 = new Ground(855, 665, 220, 10);

  //stand2 - level one
  block11 = new Box(785, 640, 30, 40);
  block21 = new Box(820, 640, 30, 40);
  block31 = new Box(855, 640, 30, 40);
  block41 = new Box(890, 640, 30, 40);
  block51 = new Box(925, 640, 30, 40);

  //stand2 - level two
  block61 = new Box(820, 600, 30, 40);
  block71 = new Box(855, 600, 30, 40);
  block81 = new Box(890, 600, 30, 40);

  //stand2 - level three
  block91 = new Box(855, 560, 30, 40);

  var polygon_options ={
    restitution: 0.4
}


  polygon = Bodies.circle(150, 300, 20, polygon_options);
  World.add(world, polygon);

  sling1 = new SlingShot(polygon, {x: 125, y: 325});
}

function draw() {
  background(0, 0, 0);
  Engine.update(engine);

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

  block11.display();
  block21.display();
  block31.display();
  block41.display();
  block51.display();
  block61.display();
  block71.display();
  block81.display();
  block91.display();
  sling1.display();
  fill('yellow');
  rect(polygon.position.x-20, polygon.position.y-10, 50, 50);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY});
}


function mouseReleased(){
  sling1.fly();
}
