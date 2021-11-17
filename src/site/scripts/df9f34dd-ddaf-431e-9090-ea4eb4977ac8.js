function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lavender");

  fill(500, 400, 0);
  noStroke();
  circle(200, 200, 60);

  fill(0, 0, 0);
  noStroke();
  ellipse(20, 20, 6, 20);
  ellipse(380, 380, 6, 20);
  circle(390, 380, 9);
  ellipse(mouseX, mouseY, 40, 40);

  fill(0, 60, 900);
  ellipse(300, 200, 40, 68);

  fill(0, 400, 0);
  circle(310, 220, 40);

  fill(0, 60, 900);
  stroke(0);
  strokeWeight(4);
  line(350, 330, 200, 330);

  fill(0, 0, 0);
  noStroke();
  triangle(50, 300, 0, 300, 0, 30);

  fill(0, 0, 0);
  noStroke();
  triangle(300, 70, 0, 60, 0, 0);

  fill(0, 60, 900);
  noStroke();
  arc(200, 200, 100, 100, radians(180), radians(360));

  function mouseClicked() {
    save();
  }
}

/*function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill('255');
  }
  ellipse(mouseX, mouseY, 50, 50);

}*/
