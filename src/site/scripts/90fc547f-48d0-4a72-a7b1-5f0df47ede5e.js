function setup() {
  createCanvas(400, 400);
  background(0, 0, 0);
  noLoop();
  fill(50);
  stroke(50);
  strokeWeight(0);
  triangle(20, 20, 20, 380, 100, 380);

  fill(100);
  stroke(100);
  strokeWeight(0);
  triangle(180, 20, 180, 380, 100, 380);

  fill('red');
  ellipse(400, 400, 300, 300);

  fill(150);
  stroke(150);
  strokeWeight(0);
  arc(
    180,
    200,
    360,
    360,
    Math.PI/180 * 270,
    Math.PI/180 * 90,
    PIE
  );
  fill('blue');
  square(100, 70, 100);
}

function draw() {
  randomChord();
  randomChord();
  randomChord();
}

function randomChord() {
  stroke(255, 255, 255);
  fill('rgba(50, 50, 50, 0)');
  stroke(random()*255, random()*255, random()*255);
  strokeWeight(random()*3);
  arc(
    random()*400,
    random()*400,
    random()*200,
    random()*200,
    Math.PI/180 * random()*360,
    Math.PI * random()*360,
  );
  rect(random()*400, random()*400, random()*200, random()*200)
  line(random()*400, random()*400, random()*400, random()*400)
}