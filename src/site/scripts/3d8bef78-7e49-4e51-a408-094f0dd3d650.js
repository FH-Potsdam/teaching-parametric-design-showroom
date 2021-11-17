const sketchHeight = 400;
const sketchWidth = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
}

function draw() {
  noLoop();
  background(255);


  for (let layer = 0; layer < 1; layer += 1) {
    let layerColor = 240;
    fill(layerColor);
    for (let y = 20; y < sketchHeight; y += 140) {
      for (let x = 20; x < sketchWidth; x += 140) {
        rect(
          x + y/60 + 1,
          1 + y + 1,
          random(60, 85),
          random(60, 80),
        );
      }
    } 
  }
}