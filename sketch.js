var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30);
  background("black");


}

function draw() 
{
  if(keyIsDown(RIGHT_ARROW)){
    background("green");
  }
  if(keyIsDown(LEFT_ARROW)){
    background("blue");
  }
  if(keyIsDown(UP_ARROW)){
    background("red");
  }
  if(keyIsDown(DOWN_ARROW)){
    background("yellow");
  }
  
drawSprites();
}




