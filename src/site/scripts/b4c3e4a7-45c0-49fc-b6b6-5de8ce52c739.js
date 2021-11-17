function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  background("pink");

  beginShape();
  fill("black")
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(100, 200);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    curveVertex(x + 200, y + 200);
  }
  endShape(CLOSE);

  beginShape();
  fill("white")
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(100, 200);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    curveVertex(x + 200, y + 200);
  }
  endShape(CLOSE);

  beginShape();
  fill("black")
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(80, 140);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    curveVertex(x + 200, y + 200);
  }
  endShape(CLOSE);

  beginShape();
  fill("white")
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(50, 100);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    curveVertex(x + 200, y + 200);
  }
  endShape(CLOSE);

  beginShape();
  fill("black")
  for (let angle = 0; angle < 360; angle += 15) {
    const radius = random(30, 60);
    const x = radius * cos(Math.PI / 180 * angle);
    const y = radius * sin(Math.PI / 180 * angle);
    curveVertex(x + 200, y + 200);
  }
  endShape(CLOSE);
}
