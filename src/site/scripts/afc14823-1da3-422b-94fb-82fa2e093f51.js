const sketchWidth = 400;
const sketchHeight = 400;
const circleSize = 15;
const circleDistance = 50;

function setup () {
  createCanvas(sketchWidth, sketchHeight);
  noLoop();
}

function draw () {
  stroke (52, 138, 84);
  strokeWeight (4);
  for(let x = 20; x <= sketchWidth; x += (circleSize + random(40, 60))) {
    for(let y = 20; y <= sketchHeight; y += (circleSize + circleDistance)) {
      circle(x, y, circleSize);
    }
  }
}