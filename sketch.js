var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
   
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
 bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
}

function setup() {
 
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}

function draw() {
  background("lightblue");
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if(keyDown("space") ){
    monkey.velocityY=-12;
  }
  
  monkey.velocityY=monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score, 500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME: "+survivalTime, 100,50);
  
  fruit(); 
  obstacles();
  
 drawSprites(); 
}

function fruit(){
  if (frameCount%80===0){
  banana=createSprite(600,300);
  banana.addImage(bananaImage);
  banana.y=Math.round(random(120,200))
  banana.scale=0.1;
  banana.velocityX=-4;
  banana.lifetime=160;
    
  bananaGroup.add(banana);
  }
 }   

function obstacles(){
  if (frameCount%300===0){
  obstacle=createSprite(600,326);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-4;
  obstacle.lifetime=160;
  }
 }
