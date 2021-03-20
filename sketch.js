const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;

var ground, stand1, stand2;
var b1,b2,b3,b4,b5,b6,b7;
var polygon, polygonImg;
var sling,score = 0;
var bg = "bg.jpg";


function preload(){
    polygonImg = loadImage("polygon.png");
    getBackgroundImg();
    backgroundImg = loadImage("bg.jpg");
    console.log(backgroundImg);
}

function setup(){
engine = Engine.create();
world= engine.world;

createCanvas(1200,600);
ground = new Ground(width/2,600,width,30);

stand1 = new Ground(380,450,300,20);
stand2 = new Ground(880,230,270,20);


     b1 = new Box(260,410,30,40);
     b2 = new Box(290,410,30,40);
     b3 = new Box(320,410,30,40);
     b4 = new Box(350,410,30,40);
     b5 = new Box(380,410,30,40);
     b6 = new Box(410,410,30,40);
     b7 = new Box(440,410,30,40);
     b8 = new Box(470,410,30,40);
     b9 = new Box(500,410,30,40);

     // 2layer
     b10 = new Box(280,370,30,40); 
     b11 = new Box(310,370,30,40); 
     b12 = new Box(340,370,30,40); 
     b13 = new Box(370,370,30,40); 
     b14 = new Box(400,370,30,40); 
     b15 = new Box(430,370,30,40); 
    b16 = new Box(460,370,30,40);

    // 3 layer
    b17 = new Box(340,340,30,40); 
    b18 = new Box(370,340,30,40); 
    b19 = new Box(400,340,30,40); 

    // 4 layer

    b20 = new Box(370,310,30,40);
// 2nd pyramid

    ba1 = new Box(780,190,30,40);
    ba2 = new Box(810,190,30,40);
    ba3 = new Box(840,190,30,40);
    ba4 = new Box(870,190,30,40);
    ba5 = new Box(900,190,30,40);
    ba6 = new Box(930,190,30,40);
    ba7 = new Box(960,190,30,40);
    ba8 = new Box(990,190,30,40);
   

    // 2layer
   ba10 = new Box(810,150,30,40); 
    ba11 = new Box(840,150,30,40); 
    ba12 = new Box(870,150,30,40); 
    ba13 = new Box(900,150,30,40); 
    ba14 = new Box(930,150,30,40); 
    ba15 = new Box(960,150,30,40); 
   ba16 = new Box(990,150,30,40);

   // 3 layer
   ba17 = new Box(850,110,30,40); 
   ba18 = new Box(880,110,30,40); 
   ba19 = new Box(910,110,30,40); 

   // 4 layer

   ba20 = new Box(870,70,30,40); 

   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);

   sling = new SlingShot(this.polygon,{x:100,y:200});

Engine.run(engine);
}

function draw(){
    if(backgroundImg) {
        background(backgroundImg);
    }
    //push();
    textSize(25);
    strokeWeight(3)
    stroke("red");
    text("Press Space to get a second Chance to Play!!",50 ,50);
    stroke("blue");
    text("score : "+ score, 750,40);
    stroke("green");
    text("Drag the polygon to hit the boxes",30,90);
    //pop();*
  Engine.update(engine);

  
    fill("lightblue");
    
    b1.display();
   b1.score();
    b2.display();
   b2.score();
    b3.display();
    b3.score(); 
    b4.display();
    b4.score();
    b5.display();
    b5.score();
    b6.display();
    b6.score();
    b7.display();
    b7.score();
    b8.display();
    b8.score();
    b9.display();
    b9.score();
  
//console.log(score);
    fill("pink");
    b16.display();
    b16.score();
    b11.display();
    b11.score();
    b12.display();
    b12.score();
    b13.display();
    b13.score();
    b14.display();
    b14.score();
    b15.display();
    b15.score();
   fill("lightgreen")
   b17.display();
   b17.score();
   b18.display();
   b18.score();
   b19.display();
   b19.score();

   fill("yellow")
   b20.display();
   b20.score();

  
   fill("lightblue");
    
   ba1.display(); ba1.score();
   ba2.display(); ba2.score();
   ba3.display(); ba3.score();
   ba4.display(); ba4.score();
   ba5.display(); ba5.score();
   ba6.display(); ba6.score();
   ba7.display(); ba7.score();
   ba8.display(); ba8.score();

   fill("pink");
  // ba16.display();
   ba10.display(); ba10.score();
   ba11.display(); ba11.score();
   ba12.display(); ba12.score();
   ba13.display(); ba13.score();
   ba14.display();  ba14.score();
   ba15.display();  ba15.score();

   fill("lightgreen")
   ba17.display();  ba17.score();
   ba18.display();  ba18.score();
   ba19.display();  ba19.score();

   fill("yellow")
   ba20.display();  ba20.score();
 
   
   
  
   push();
    imageMode(CENTER);
   image(polygonImg,polygon.position.x,polygon.position.y,40,40);
 //polygon.display();
 pop();
 sling.display();

 ground.display();
 stand1.display();
 stand2.display();


 
}
function mouseReleased(){
    sling.fly();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{
        x:mouseX,y:mouseY
    });
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(this.polygon, {x:100, y:200}) 
	  sling.attach(this.polygon);
	}
  }

  async function getBackgroundImg() {
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var date = responseJSON.datetime;
    var hour = date.slice(11, 13);
    if(hour>=06 && hour<=19){
        bg = "bg.jpg"
    } else {
        bg = "bg1.jpg"
    }
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
  }