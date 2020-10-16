var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  
  //creating speed and weight
  speed = random(55,90);
  weight = random(400,1500);

  //creating car
  car = createSprite(50,200,100,50);
  car.velocityX = speed;

  //creating wall
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);

}

function draw() {
  background(0);  

  //creating algorithm
  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    
    //creating deformation
    var deformation = 0.5 * weight * speed * speed / 22500;

    //danger car
    if(deformation > 180){
      car.shapeColor = ("red");
    }

    //average car
    if(deformation < 180 && deformation > 100){
      car.shapeColor = ("yellow");
    }
    
    //safe car
    if(deformation < 100){
      car.shapeColor = ("green");
    }

  }

  drawSprites();
}