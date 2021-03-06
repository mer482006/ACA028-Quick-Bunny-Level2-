function setup() {
  createCanvas(600,600);
  
  rabbit = createSprite(40,550,15,15); 
  carrot = createSprite(557,60,25,60);
  brick1 = createSprite(80,280,120,18);
  brick2 = createSprite(10,350,120,18);
  brick3 = createSprite(190,350,120,18);
  brick4 = createSprite(370,350,120,18);
  brick5 = createSprite(550,350,120,18);
  brick6 = createSprite(730,350,120,18);
  brick7 = createSprite(260,280,120,18);
  brick8 = createSprite(440,280,120,18);
  brick9 = createSprite(610,280,120,18);

  snakeGroup= new Group();
  
  rabbit.shapeColor="darkSeaGreen"
  carrot.shapeColor="lightSalmon"
  brick1.shapeColor="silver"
  brick2.shapeColor="silver"
  brick3.shapeColor="silver"
  brick4.shapeColor="silver"
  brick5.shapeColor="silver"
  brick6.shapeColor="silver"
  brick7.shapeColor="silver"
  brick8.shapeColor="silver"
  brick9.shapeColor="silver"
}
  function draw() {
  background("midnightBlue"); 
  
  generateSnakes();
  
  if(keyDown("up")){
  rabbit.y=rabbit.y-3;
  }
  
  if(keyDown("down")){
  rabbit.y=rabbit.y+3;
  }
  
  if(keyDown("left")){
  rabbit.x=rabbit.x-3;
  }
  
  if(keyDown("right")){
  rabbit.x=rabbit.x+3;
  }
  
  if(rabbit.isTouching(carrot)){
  text("YOU WIN",200,200);
  }
  
  if(rabbit.isTouching(brick1)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick2)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick3)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick4)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick5)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick6)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick7)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick8)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  if(rabbit.isTouching(brick9)){
  text("You lose!",300,50);
  rabbit.x=60;
  rabbit.y=540;
  }
  
  for(var i = 0 ; i< (snakeGroup).length ;i++){
  var temp = (snakeGroup).get(i) ;
  if (rabbit.isTouching(temp)) {
  rabbit.x=40;
  rabbit.y=550;
  } 
  }
  
  drawSprites();
  }
  
  function generateSnakes(){
  if(frameCount % 40===0){
  var snake = createSprite(600,random(70,520),random(120,190),30);
  snake.scale=random(0.1,0.3);
  snake.shapeColor="khaki"
  snake.velocityX=-6;
  snakeGroup.add(snake);
  }
  }
  