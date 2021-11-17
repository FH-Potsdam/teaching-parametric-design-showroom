function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250);
  stroke(0);
  strokeWeight(1);

  beginShape();
  vertex(0, 0);
  bezierVertex(20, 60, 10, 30, 30, 0);
  endShape(CLOSE);

  let blue = color (220, 220, 215);
  fill (blue);
  triangle(180, 145, 198, 90, 216, 145);
  let white = color (220, 220, 215);
  fill (white);
  triangle(180, 155, 158, 310, 305, 145);
  circle(200, 200, 180);
  let yellow = color (90, 90, 85);
  fill (yellow);
  circle(200, 200, 130);
  let green = color (220, 220, 215);
  fill (green);
  circle(200, 200, 80);
  let red = color (90, 90, 85);
  fill (red);
  circle(200, 200, 30);
  let grey = color (150, 150, 145);
  fill (grey);


  
  }