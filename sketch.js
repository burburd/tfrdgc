var sea,seaImage,seaInv;
var ship,ship_Image;

function preload(){
  seaImage = loadImage("sea.png");
  ship_Image = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  
  ship = createSprite(340,340,20,20);
  ship.addAnimation("ship",ship_Image);
  ship.scale = 1.2;
  ship.velocityX=5;

  sea = createSprite(50,160,20,50);
  sea.addImage("sea",seaImage)
  sea.x = sea.width /2;
  sea.velocityX = -4
  
  seaInv = createSprite(50,170,20,50);
  seaInv.visible = false;
}



function draw() {
  background("blue");
 //console.log(ship.x)
 drawSprites();

}

