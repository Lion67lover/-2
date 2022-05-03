var ronald_reagen, Trex, Rabbit, Europe, Shoe, Cactus

function preload(){
    Background = loadImage("download-1 copy.jpg")
    ronald_reagenImage = loadImage("download-2.jpg")
    Treximage = loadImage("download-1.jpg")
    Shoe = loadImage("download-1.png")
    EuropeImage = loadImage("download-3.jpg")
    RabbitImage = loadImage("download.jpg")
    Cactus = loadImage("download.png")
}

function setup(){
    createCanvas(1000,800);
    ronald_reagen = createSprite(500,350,400,20);
    ronald_reagen.addImage("download-2.jpg",ronald_reagenImage)
    ronald_reagen.scale = 0.5
    Trex = createSprite(90,650,400,20);
    Trex.addImage("download-1.png",Treximage);
    Trex.scale = 0.4
    Rabbit = createSprite(800,650,400,20);
    Rabbit.addImage("download.jpg",RabbitImage);
    Rabbit.scale = 0.4
    Europe = createSprite(500,50,400,20);
    Europe.addImage("download-3.jpg",EuropeImage);
    Europe.scale = 0.5
}
    
function draw(){
    background(Background);
    if (keyDown("RIGHT_ARROW")) {
        Trex.x+=50;
      }
      if (keyDown("DOWN_ARROW")) {
        Trex.y+=50;
      }
      if (keyDown("LEFT_ARROW")) {
        Trex.x-=50;
      }
       if (keyDown("SPACE")) {
        Trex.y-=50;
      }
      if (keyDown("A")) {
        Rabbit.x-=50;
      }
      if (keyDown("S")) {
        Rabbit.y+=50;
      }
      if (keyDown("D")) {
        Rabbit.x+=50;
      }
      if (keyDown("W")) {
        Rabbit.y-=50;
      }
      if( Trex.collide(ronald_reagen)){
        Trex.velocityY = 0.0;
        Trex.visible = false;
      }
      if( Rabbit.collide(ronald_reagen)){
        Rabbit.velocityY = 0.0;
        Rabbit.visible = false;
      }
      ronald_reagen.velocityX = 50
      ronald_reagen.velocityX = -50

    Trex.debug = true
    ronald_reagen.debug=true
    drawSprites();
}