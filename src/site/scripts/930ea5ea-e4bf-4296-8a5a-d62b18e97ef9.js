const sketchWidth = 400;
const sketchHeight = 400;
const numPoints = 90;
const velocity = 20;
const points = [];

function setup() {
  createCanvas(400, 400);
}
for (let p = 0; p < numPoints; p += 1) {
  points.push([
    Math.random() * sketchWidth,
    Math.random() * sketchHeight,
    Math.random() * velocity,
    Math.random() * velocity
  ]);
}

const numLoops = 50;
const minOpacity = 200;
function draw() {
  background('#090811');
  noLoop();
  for (let l = 0; l < numLoops; l += 1) {
    noFill();

    stroke(27, 23, 53, minOpacity/numLoops * l)

    beginShape();
    for (let p = 0; p < points.length; p += 1) {
      curveVertex(
        points[p][0] + l * points[p][2],
        points[p][1] + l * points[p][3]
      );
    }
    endShape();

    stroke(73, 62, 142, minOpacity/numLoops * l)

    beginShape();
    for (let p = 0; p < points.length; p += 1) {
      curveVertex(
        points[p][0] + l * points[p][2],
        points[p][1] + l * points[p][3]
      );
    }
    endShape();

    stroke(72, 61, 139, minOpacity/numLoops * l)

    beginShape();
    for (let p = 0; p < points.length; p += 1) {
      curveVertex(
        points[p][0] + l * points[p][2],
        points[p][1] + l * points[p][3]
      );
    }
    endShape();

    stroke(255, 255, 255, minOpacity/numLoops * l)

    beginShape();
    for (let p = 0; p < points.length; p += 1) {
      curveVertex(
        points[p][0] + l * points[p][2],
        points[p][1] + l * points[p][3]
      );
    }
    endShape();
  }
}




