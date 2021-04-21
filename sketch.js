const Engine=Matter.Engine; 
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;
var ground,ball;

function setup() {
  createCanvas(800,400);
  
  myengine=Engine.create();
  myworld=myengine.world;

var options={ 

    isStatic:true,
    friction:1.5

}

ground=Bodies.rectangle(400,height-10,50,50,options);
World.add(myworld,ground);

ball=Bodies.circle(200,200,30,{friction:0,restitution:0,density:5});
World.add(myworld,ball);
}

function draw() {
   var pos=ground.position;
   var bpos=ball.position;
      Engine.update(myengine);


  background(0); 
  rectMode(CENTER) 
  rect(pos.x,pos.y,width,20); 
ellipseMode(RADIUS);
ellipse(bpos.x,bpos.y,30,30);

}