var fixedRect, movingRect;
var rect3, rect4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect3 = createSprite(200, 100, 60, 90)
  rect3.shapeColor= "red";
  rect3.debug= true;
  rect4 = createSprite(200, 700, 90, 60)
  rect4.shapeColor="red";
  rect4.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect3.velocityY = +5;
  rect4.velocityY=-5;
}

function draw() {
  background(0,0,0);  
bounceOff(rect3,rect4)
bounceOff(movingRect,fixedRect)
  
  
  drawSprites();
}

