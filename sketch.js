function setup() {
  createCanvas(400,400);
  

  dustbin = new Dustbin(x,y,40,40)
  sling = new SlingShot(ball.body,{x:200,y:100});
}

function draw() {
  background(255,255,255);
  dustbin.display();
  sling.display();  
  drawSprites();
}  


function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();      
} 
  