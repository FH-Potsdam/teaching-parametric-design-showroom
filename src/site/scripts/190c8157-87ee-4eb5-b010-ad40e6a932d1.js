function setup() {
  createCanvas(400, 400);
}

function draw() {
  frameRate(10);
  background('lavender');
  noFill();
  stroke('red');
  strokeWeight(3);

  beginShape();
  for(let angle = 0; angle < 360; angle += 15) {
    const radius = random(40, 80);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    curveVertex(x + 200, y + 200);
    }
    endShape();

    frameRate(5);
  fill('yellow');
  stroke('yellow');
  strokeWeight(3);

    beginShape();
  for(let angle = 0; angle < 360; angle += 15) {
    const radius = random(40, 80);
    const x = radius * cos(Math.PI / 130 * angle);
    const y = radius * sin(Math.PI / 110 * angle);
    curveVertex(x + 200, y + 200);
    }
    endShape();

    
}