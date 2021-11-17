function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  stroke(255, 0, 255);
  line(50, 50, 75, 25);
  stroke(255, 0, 255);
  line(100, 50, 125, 25);
  stroke(255, 0, 255);
  line(75, 25, 125, 25);
  stroke(255, 0, 255);
  line(125, 75, 125, 25);
  line(125, 75, 125, 25);
  line(100, 100, 125, 75);
  stroke(255, 255, 255);
  fill("white");
  square(0, 100, 50);
  square(50, 50, 50);
  square(100, 100, 50);
  square(150, 150, 50);
  square(200, 100, 50);
  square(250, 50, 50);
  square(300, 100, 50);
  square(350, 150, 50);
  square(400, 100, 50);
  square(450, 50, 50);
  square(500, 100, 50);
  square(550, 150, 50);
  rect(0, 200, 600, 20);
  // I don't know how to build a pattern so i can select all de (x;y) point of the squares
  fill(255, 0, 255);
  strokeWeight(10);
  circle(275, 275, 100);
  fill(255, 255, 255);
  strokeWeight(1);
  circle(275, 275, 50);
  fill(255, 0, 255);
  circle(275, 275, 10);
  fill(255, 255, 255);
  rect(0, 330, 600, 20);
  // Here is where i would love to do a mirror of everything
    arc(50, 550, 100, 100,
      Math.PI/180 * 0, Math.PI/180 * 45);
  arc(150, 550, 100, 100,
      Math.PI/180 * 45, Math.PI/180 * 90);
  arc(250, 550, 100, 100,
     Math.PI/180 * 90, Math.PI/180 * 135);
  arc(350, 550, 100, 100,
     Math.PI/180 * 135, Math.PI/180 * 180);
  arc(450, 550, 100, 100,
     Math.PI/180 * 180, Math.PI/180 * 225);
  arc(550, 550, 100, 100,
     Math.PI/180 * 225, Math.PI/180 * 270);
// 2nd line
     arc(50, 450, 100, 100,
      Math.PI/180 * 0, Math.PI/180 * 45);
  arc(150, 450, 100, 100,
      Math.PI/180 * 45, Math.PI/180 * 90);
  arc(250, 450, 100, 100,
     Math.PI/180 * 90, Math.PI/180 * 135);
  arc(350, 450, 100, 100,
     Math.PI/180 * 135, Math.PI/180 * 180);
  arc(450, 450, 100, 100,
     Math.PI/180 * 180, Math.PI/180 * 225);
  arc(550, 450, 100, 100,
     Math.PI/180 * 225, Math.PI/180 * 270);
  }


