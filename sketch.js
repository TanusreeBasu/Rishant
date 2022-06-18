var path,boy, leftBoundary,rightBoundary;
var hellosGroup
var pathImg,boyImg;
var i;
var hello1,hello2,hello3;
var score =0
function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  
  hello1 = loadImage ("bomb.png");
  hello2 = loadImage ("coin.png");
  hello3 = loadImage ("energyDrink.png") 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
hello1.scale=0.5
hello2.scale=0.5
hello3.scale=0.5
leftBoundary=createSprite(0,0,100,800);

//leftBoundary.visible = false;
 leftBoundary.visible = false;
// leftBoundary.invisible = true;
// leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;

hellosGroup = createGroup();

}
function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
    
 // path.velocityX = -(4 + 3* score/100)
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

 // if(path.y > 400 ){
   
 //path.y = height/2;


  //if(path.y > 400 ){
//path.y = height/2;}//

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}


//function reset(){

function spawnhellos (){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,65,10,40);
    obstacle.velocityX = -(6 + score/100);
    hellosGroup.add(obstacle)
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: hello1.addImage(bomb);
              break;
      case 2: hello2.addImage(coin);
              break;
      case 3: hello3.addImage(energyDrink);
              break;
      
      default: break;
    }
  }
}
//}

