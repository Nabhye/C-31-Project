var particles = [];
var plinko = [];
var divisions = [];
var divisionHeigth=300;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  divisions = new Division(200,200,20,30);

  for(var k = 0; k <=innerWidth; k = k +80) {
    divisions.push(new Division(k, heigth-divisionHeigth/2, 10, divisionHeigth));
  }
 
}

function draw() {
  background(255,255,255);  

divisions.display();

  drawSprites();
}