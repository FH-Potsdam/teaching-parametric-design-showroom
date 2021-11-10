function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150, 50, 100);

  beginShape();
  vertex(0, 0);
  bezierVertex(40, 120, 20, 60, 60, 0);
  bezierVertex(80, 240, 40, 120, 120, 0);
  bezierVertex(40, 140, 20, 60, 60, 0);
  bezierVertex(80, 240, 40, 120, 120, 0);
  bezierVertex(160, 480, 80, 240, 240, 0);
  bezierVertex(80, 240, 40, 120, 120, 0);
  bezierVertex(160, 480, 80, 240, 240, 0);
  bezierVertex(320, 960, 160, 480, 480, 0);
  bezierVertex(160, 480, 80, 240, 240, 0);
  endShape(CLOSE);
 
  let green = color (340, 200, 100);
  fill (green);
 
}