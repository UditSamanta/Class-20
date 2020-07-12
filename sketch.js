var fixedObj, movingObj;

function setup() {
  createCanvas(800,400);
  fixedObj = createSprite(200, 200, 50, 50);
  fixedObj.shapeColor = "green";
  movingObj = createSprite(170, 200, 50, 50);
  movingObj.shapeColor = "green";
 }

function draw() {
  background(0);  
  movingObj.x = mouseX;
  movingObj.y = mouseY;

  if(movingObj.x-fixedObj.x < movingObj.width/2 +  fixedObj.width/2
    && fixedObj.x-movingObj.x < fixedObj.width/2 + movingObj.width/2
    &&movingObj.y-fixedObj.y < movingObj.height/2 + fixedObj.height/2
    && fixedObj.y-movingObj.y < fixedObj.height/2+movingObj.height/2) {
     fixedObj.shapeColor = "red";
     movingObj.shapeColor = "red";
    }
    else {
      fixedObj.shapeColor = "green";
     movingObj.shapeColor = "green";
    }

  drawSprites();
}
