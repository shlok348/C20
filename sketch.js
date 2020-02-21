var fixed,moving;

function setup() {
  createCanvas(1200,800);
 fixed= createSprite(400, 100, 50, 80);
 fixed.shapeColor="green";
 fixed.debug=true;
 moving= createSprite(400, 800, 80, 30);
 moving.shapeColor="green";
 moving.debug=true;
 moving.velocityY=-5;
 fixed.velocityY=+5;
}

function draw() {
  background(255,255,255);  
  if(moving.x-fixed.x<fixed.width/2+moving.width/2
   && fixed.x-moving.x<fixed.width/2+moving.width/2){
moving.velocityX=moving.velocityX*(-1);
fixed.velocityX=fixed.velocityX*(-1);

  }
  if(moving.y-fixed.y<fixed.height/2+moving.height/2
    && fixed.y-moving.y<fixed.height/2+moving.height/2){
 moving.velocityY=moving.velocityY*(-1);
 fixed.velocityY=fixed.velocityY*(-1);
 
   }
  drawSprites();
}