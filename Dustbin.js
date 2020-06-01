class Dustbin{
    constructor(width,height){
        this.body = Bodies.rectangle(300,350,width,height);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/dustbinImg.jpg")
    }
    display();
    rectMode(CENTER);
    
}