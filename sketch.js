var BG,ground,groundImg,backgroundImg,invisibleground;
var superhero,heroshoot,jump,sit;
var heroshoot, heroshootImg,superheroImg,jumpImg,sitImg;
var bulletGroup,kargilbulletGroup,knifeGroup, bullet, bulletImg,kargilbullet,kargilbulletImg,knife,knifeImg;
var enemy1Group,enemy2Group,enemy3Group,enemy4Group,enemy5Group;
var enemy1,enemy2,enemy3,enemy4,enemy5;
var enemy1Img,enemy2Img,enemy3Img,enemy4Img,enemy5Img;
var kill=0,health=200;
var killsound;
var gameover,oversound,restart,overimg,resetimg,end;
var gamestate="instruction",background00;


var startscreen,instuction,play,playImg;
function preload(){
backgroundImg=loadImage("background.PNG");
  superheroImg=loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png");
  groundImg=loadImage("ground2;.PNG");
  bulletImg=loadImage("bullet.png");
  heroshootImg=loadAnimation("fire (1).png","fire (2).png","fire (3).png");
  jumpImg=loadAnimation("jump (1).png","jump (2).png","jump (3).png","jump (4).png","jump (5).png");
  sitImg=loadAnimation("down (1).png","down (2).png","down (3).png","down (4).png");
enemy1Img=loadAnimation("enemy1.gif");
enemy2Img=loadAnimation("enemy2.gif");
enemy3Img=loadAnimation("enemy3.gif");
killsound=loadSound("killsound.mp3");
  enemy4Img=loadAnimation("enemy4.gif");
  kargilbulletImg=loadImage("kargilbullet.png");
  knifeImg=loadImage("knife.png");
  startscreen=loadImage("start.PNG");
  playImg=loadImage("play.png");
  overImg=loadImage("gameover.png");
  resetImg=loadImage("reset.png");
  oversound=loadSound("gameoversound (2).wav");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 

  ground=createSprite(width/4,height-45,15);
  ground.addImage(groundImg);
  ground.velocityX=-7;
  ground.scale=1.6;
  groundImg.visible=false;
  
  
 invisibleground=createSprite(width/2,35,1500,15);
 invisibleground.visible=false;

  superhero=createSprite(80,height-55);
  superhero.addAnimation("hero",superheroImg);
  superhero.scale=1.7;
  superhero.visible=false;
  // superhero.debug=true;
  superhero.setCollider("circle",0,0,20);
  
 //superhero.velocityX=1;
instructions = createSprite(width/2 ,height/2);
  instructions.addImage(startscreen);
  instructions.visible=false;
  instructions.scale=1.5;
  
  play=createSprite(width/4,height/1.4);
  play.addImage(playImg);
  play.visible=false;
  play.scale=0.3;
  
  gameover=createSprite(width/2,230);
  gameover.addImage(overImg);
  gameover.visible=false;
  
  restart=createSprite(width/2,320);
  restart.addImage(resetImg);
  restart.visible=false;
  
  kargilbulletGroup=new Group();
  bulletGroup= new Group();
  knifeGroup=new Group();
  enemy1Group=new Group();
  enemy2Group=new Group();
  enemy3Group= new Group();
  enemy4Group=new Group();
  enemy5Group=new Group();
}

function draw() {
 background(backgroundImg);
  //edges=createEdgeSprites();
  
  if (gamestate === "instruction") {
   instructions.visible=true;
    play.visible=true;
    if(mousePressedOver(play)){
      gamestate=play;
    }
    
  }
    
  
  
  if (gamestate === play){
    instructions.visible=false
    play.visible=false
  
    ground.visible=true;
    superhero.visible=true;
    
 if(ground.x < 350){
    ground.x=450;
  }
 
  textSize(40);
  fill("red");
    stroke("black")
    strokeWeight(10)
textFont("cooper");
  text("Kill: "+kill,width-250,40);
  fill("yellow");
  text("Health: "+health,width-1230,35);

 superhero.collide(ground); 
superhero.collide(invisibleground);


  if(keyDown("UP")&& superhero.y){
          superhero.changeAnimation("hero",jumpImg);
          superhero.scale=1.6;
          superhero.velocityY=-6;  
  }
  
  if(keyWentUp("UP")){
          superhero.velocityY=superhero.velocityY+10;
          superhero.visible=true;
  }

  
if(keyWentDown("DOWN")){
superhero.changeAnimation("hero",sitImg);
superhero.scale=1.6;
}

if(keyWentUp("DOWN")){
  superhero.changeAnimation("hero",superheroImg);
}
  
  
      if(keyWentDown("space")){
                superhero.changeAnimation("hero",heroshootImg);
                superhero.scale=1.6;    
            Bullet();
                  ground.velocityX=0;
        
      }
  
   if ( keyDown("LEFT_ARROW")) {
          superhero.x=superhero.x-2;
      }
   
   if ( keyDown("RIGHT_ARROW")) {
    superhero.x=superhero.x+2;
  }
   
   if(keyWentUp("space")){
     superhero.visible=true;
    
     ground.velocityX=-8;  
   }
  
     if(bulletGroup.isTouching(enemy1Group)){
       kill=kill+1;
       enemy1Group.destroyEach();
       bulletGroup.destroyEach();
       killsound.play();
     }
 
  if(bulletGroup.isTouching(enemy2Group)){
       kill=kill+1;
       enemy2Group.destroyEach();
       bulletGroup.destroyEach();
           killsound.play();

     }
 
  if(bulletGroup.isTouching(enemy3Group)){
       kill=kill+1;
       enemy3Group.destroyEach();
       bulletGroup.destroyEach();
           killsound.play();

     }
  
   if(bulletGroup.isTouching(enemy4Group)){
       kill=kill+1;
       enemy4Group.destroyEach();
       bulletGroup.destroyEach();
           killsound.play();

     }
 
    if(bulletGroup.isTouching(knifeGroup)){
      knifeGroup.destroyEach();
      bulletGroup.destroyEach();
      killsound.play();
      }
    
    
    if(bulletGroup.isTouching(kargilbulletGroup)){
      kargilbulletGroup.destroyEach();
      bulletGroup.destroyEach();
      killsound.play();
      }
    
  if(enemy1Group.isTouching(superhero)){
    
    enemy1Group.destroyEach();
    health=health-20;
    
  }
  
  
  if(enemy2Group.isTouching(superhero)){
    
    enemy2Group.destroyEach();
    health=health-20;
    
  }
  
  
  if(enemy3Group.isTouching(superhero)){
    
    enemy3Group.destroyEach();
    health=health-20;
    
  }
  
  
  if(enemy4Group.isTouching(superhero)){
    
    enemy4Group.destroyEach();
    health=health-20;
    
  }
    
    if(knifeGroup.isTouching(superhero)){
      knifeGroup.destroyEach();
      health=health-20;
    }
     
    
    
  if(kargilbulletGroup.isTouching(superhero)){
    kargilbulletGroup.destroyEach();
    health=health-20;
    
  }
    
 
  
  if(frameCount%299===0){
    Enemy3();
  }
  
  if(frameCount%149===0){
    Enemy4();
  }
  
  if(frameCount%479===0){
    Enemy1();
  }
  
  if(frameCount%378===0){
    Enemy2();
  }
  }
  
  if(health===0){
    gamestate=end;
  }  
    if(gamestate===end){
    restart.visible=true;
    gameover.visible=true;
      superhero.visible=false;
     ground.velocityX=0;
      enemy1Group.destroyEach();
      enemy2Group.destroyEach();
      enemy3Group.destroyEach();
      enemy4Group.destroyEach();
      kargilbulletGroup.destroyEach();
      bulletGroup.destroyEach();
      knifeGroup.destroyEach();
    
    if(mousePressedOver(restart)){
       reset();
       }
    
    }
  
  
  
  drawSprites();

  
}

function reset(){
  
 gamestate="instruction";
  health=200;
        oversound.play();
  kill=0;
  gameover.visible=false;
  restart.visible=false;
  superhero.visible=true;
  ground.velocityX=-8;
  
  
  
}

function Bullet(){
  
  var bullet=createSprite(superhero.x+90,superhero.y-22);
    bullet.addImage(bulletImg);
    bullet.velocityX=25;   
     bullet.scale=0.24;
     bullet.visible=true;
  bulletGroup.add(bullet);
  bullet.lifetime=200;
  
}

function Enemy1(){
  
 var enemy1=createSprite(1350,height-145,15);
  enemy1.addAnimation("enemy1",enemy1Img);
  enemy1.velocityX=-(5 + 3*kill/10);
   enemy1.scale=1;
  enemy1.lifetime=200;
  enemy1Group.add(enemy1)
}


function Enemy2(){
  
 var enemy2=createSprite(1350,height-145,15);
  enemy2.addAnimation("enemy2",enemy2Img);
  enemy2.velocityX=-(9 + 3*kill/10);
  enemy2.scale=0.9;
 enemy2Group.add(enemy2);
  enemy2.lifetime=200;
  
 kargilbullet=createSprite(enemy2.x-40,height-145,15);
  kargilbullet.addImage(kargilbulletImg);
  kargilbullet.velocityX=-(30 + 2*kill/15);
  kargilbullet.scale=0.4;
    kargilbullet.lifetime = 200;

 // kargilbullet.debug=true;
  enemy2.depth=kargilbullet.depth;
  enemy2.depth=enemy2.depth+1;
  kargilbulletGroup.add(kargilbullet);
 
  
}

function Enemy3(){
  
  var enemy3=createSprite(1350,height-145,15);
  enemy3.addAnimation("enemy3",enemy3Img);
  enemy3.velocityX=-(4 + 3*kill/10);
  enemy3.scale=0.8;
  enemy3Group.add(enemy3);
  enemy3.lifetime = 200;
}

function Enemy4(){
  
  var enemy4=createSprite(1350,height-145,15);
  enemy4.addAnimation("enemy4",enemy4Img);
  enemy4.velocityX=-(4 + 3*kill/10);
  enemy4.scale=3.3;
  enemy4Group.add(enemy4);
  enemy4.lifetime = 200;
  
  var knife=createSprite(enemy4.x-35,height-145,15);
  knife.addImage(knifeImg);
  knife.velocityX=-(25 + 3*kill/10);
  knife.scale=0.17;
  knife.rotationSpeed=10;
  knife.lifetime = 150;
  // knife.debug=true;
  knife.setCollider("circle",0,0,100);
knifeGroup.add(knife);
  
  
}
