var frectangle1,mrectangle1;
var f1,f2;
function setup() {
  createCanvas(800,400);
 frectangle1= createSprite(400, 200, 50, 50);
frectangle1.shapeColor="green";
  mrectangle1=createSprite(15,49,50,100);
  mrectangle1.shapeColor="pink";
  mrectangle1.debug=true;
  frectangle1.debug=true;
  f1=createSprite(150,390,50,10);
  f1.shapeColor="purple"
  f1.debug=true;
  f1.velocityX=3;
  f2=createSprite(250,390,10,50);
  f2.shapeColor="purple"
  f2.debug=true;
  f2.velocityX=-3;
}

function draw() {
  background(0);
  mrectangle1.x=World.mouseX;
  mrectangle1.y=World.mouseY;  
 if(isTouching(mrectangle1,f2)) {    
   mrectangle1.shapeColor="yellow";
   f2.shapeColor="pink";
 }
else{
  mrectangle1.shapeColor="pink";
  f2.shapeColor="purple"; 
}
bounceOff(f1,f2);

  drawSprites();
}
