function setup() {
  createCanvas(400, 400);
  frameRate(6.5);
}

function draw() {
  background('black');
  stroke("blue");
  strokeWeight(8);
  fill("yellow");
  rect(50, 50, 300, 300);
  fill('black');
  rect(150, 150, 100, 100);
  for(let count = 1; count <= 25; count += 1) {
    fill(random(0,255));
    noStroke();
    circle(
      random(0, 400),
      random(0, 400),
      6 + count * 4
    );
  }
}

