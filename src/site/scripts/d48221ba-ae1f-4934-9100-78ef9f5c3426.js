const sketchWidth = 400;
const sketchHeight = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

let rotation = 0;



function draw() {
  
  noStroke();
  fill('orange');
  
  translate(sketchWidth/2, sketchHeight/2);
  rotate(Math.PI / 180 * rotation);
  scale(0.6);

  let segments = 5;
  beginShape();
  for (let c = 0; c < segments; c += 1) {
    const rad = Math.PI / 180 * 360 / segments * c;
    const x = 100 * Math.cos(rad);
    const y = 100 * Math.sin(rad);
    vertex(x, y);
  }
  endShape();

  beginShape();
  fill('aquamarine')
  for (let c = 0; c < segments; c += 1) {
    const rad = Math.PI / 2 * 25 / segments * c;
    const x = -33 * Math.cos(rad);
    const y = -50 * Math.sin(rad);
    vertex(x, y);
  }
  endShape();

  beginShape();
  fill('white')
  for (let c = 0; c < segments; c += 1) {
    const rad = Math.PI / 10 * 20 / segments * c;
    const x = 40 * Math.cos(rad);
    const y = 20 * Math.sin(rad);
    vertex(x, y);
  }
  endShape();
  
  beginShape();
  fill('blue');
  scale(0.5);
  for (let c = 0; c < segments; c += 1) {
    const rad = Math.PI / 5 * 60 / segments * c;
    const x = 20 * Math.cos(rad);
    const y = 40 * Math.sin(rad);
    vertex(x, y);
  }
  endShape();

  beginShape();
  fill('black');
  scale(0.3);
  for (let c = 0; c < segments; c += 1) {
    const rad = Math.PI / 5 * 60 / segments * c;
    const x = 20 * Math.cos(rad);
    const y = 40 * Math.sin(rad);
    vertex(x, y);
  }
  endShape();

  rotation += 0.09;
}