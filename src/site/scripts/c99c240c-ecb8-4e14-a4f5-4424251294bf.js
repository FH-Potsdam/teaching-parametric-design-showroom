function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(230);

  strokeWeight(0);

  fill(0);
  triangle(200, 10, 10, 200, 390, 200);

  
  triangle(201, 201, 200, 390, 390, 201);
  
  fill(345, 245, 240);

  triangle(10, 200, 200, 390, 200, 200);

  line(200, 200, 390, 200);

  
}