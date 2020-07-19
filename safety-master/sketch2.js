var bg
var childgroup;
var robAnimation;
var robAnimation2;
var robber;
function preload(){
bg=loadImage("playg.png");
childgroup=loadImage("childgroup.png");
robAnimation1=loadAnimation("robber3.png");
robAnimation2=loadAnimation("robber4.png")
robAnimation3=loadAnimation("robber2.png","robber1.png","robber3.png","robber4.png")
}

function setup(){
    createCanvas(displayWidth-20,750);
    road= createSprite(displayWidth/2,720,displayWidth-20,10);
robber=createSprite(100,100);
robber.addAnimation("robber1",robAnimation1);
robber.addAnimation("robber2",robAnimation2);
robber.velocityY=2;
robber.scale=0.5;
}



function draw(){
background("white");

image(bg,600,500);
image(childgroup,980,500);
if(robber.collide(road))
{
    robber.changeAnimation("robber2");  
}

drawSprites()
}