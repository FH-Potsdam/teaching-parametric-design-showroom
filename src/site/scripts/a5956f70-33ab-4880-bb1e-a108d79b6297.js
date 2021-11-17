const sketchHeight = 400;
const sketchWidth = 400;


function setup() {
  createCanvas(sketchWidth, sketchHeight);
  background(200);
  angleMode(DEGREES);
}

function draw() {
  background(200, 300,150);
  stroke(0);
  strokeWeight (5);
  noFill();

  beginShape();

 
  let spacing = map(mouseX, 0, width, 5, 100)
  for (let a = 0; a < 360; a += spacing ) {
    let x = 100 * sin(a) + 200;
    let y = 100 * cos(a) + 200;
    vertex (x, y)

  }
 endShape(CLOSE);
}


