const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world
var Background,snow

function preload() {
  Background = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  if(frameCount%90 === 0)
  {
   snow = new Snow(random(width/2-10, width/2 + 10),10,10)
  }
}

function draw() {
  background(Background);  
  Engine.update(engine)
  drawSprites();
  snow.display()
}