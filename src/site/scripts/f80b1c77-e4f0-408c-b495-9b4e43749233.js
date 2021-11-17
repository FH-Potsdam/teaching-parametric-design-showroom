function setup () {
  createCanvas(400, 400);
  noLoop();
}

function draw () {
  background(132 , 214 , 243);
  noFill();
  stroke(0);
  strokeWeight(4);

  fill(200);
  beginShape();
for(let angle = 0; angle < 360; angle += 5) {
  const radius = random(150, 220);
  const x = radius * cos(Math.PI / 180 * angle);
  const y = radius * sin(Math.PI / 180 * angle);
  curveVertex(x + 200 , y + 300);
}
endShape(CLOSE);

  fill(255, 60, 60);
  beginShape();
for(let angle = 0; angle < 360; angle += 5) {
  const radius = random(120, 200);
  const x = radius * cos(Math.PI / 180 * angle);
  const y = radius * sin(Math.PI / 180 * angle);
  curveVertex(x + 200 , y + 320);
}
endShape(CLOSE);

fill(255, 154, 0);
beginShape();
for(let angle = 0; angle < 360; angle += 5) {
const radius = random(80, 180);
const x = radius * cos(Math.PI / 180 * angle);
const y = radius * sin(Math.PI / 180 * angle);
curveVertex(x + 200 , y + 350);
}
endShape(CLOSE);

fill(246, 238, 12);
beginShape();
for(let angle = 0; angle < 360; angle += 5) {
const radius = random(50, 100);
const x = radius * cos(Math.PI / 180 * angle);
const y = radius * sin(Math.PI / 180 * angle);
curveVertex(x + 200 , y + 380);
}
endShape(CLOSE);

fill(16, 128, 9);
beginShape();
curveVertex(0, 320);
curveVertex(100, 330);
curveVertex(200, 350);
curveVertex(300, 350);
curveVertex(400, 340);
curveVertex(500, 500);
curveVertex(-100, 500);
endShape(CLOSE);

fill(218, 104, 206);
circle(200, 355, 12);

fill(255);
ellipse(200, 340, 60, 30);

circle(165, 326, 20);

line(180, 352, 180, 365);
line(190, 355, 190, 365);
line(210, 355, 210, 365);
line(220, 352, 220, 365);

line(230, 340, 235, 355);
point(167, 323);
point(162, 323);

fill(0);
circle(210, 350, 10);
circle(185, 345, 14);
ellipse(205, 331, 20, 8);



}


