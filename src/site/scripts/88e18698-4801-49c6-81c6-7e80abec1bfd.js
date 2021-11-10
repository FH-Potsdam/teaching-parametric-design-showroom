function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill("yellow");
  circle(205, 205, 30);
  fill("black");
  ellipse(201, 202, 3 ,3);
  ellipse(209, 202, 3 ,3);
  arc(205, 210, 12, 9, 0, Math.PI);
  ellipse(110, 105, 10 ,10);

  fill("black");
  square(10, 10, 50);
  square(10, 340, 50);
  square(340, 340, 50);
  square(340, 10, 50);
  
  fill("red");
  strokeWeight(2);
  
  square(280, 80, 40);
  square(80, 280, 40);
  square(280, 280, 40);
  square(80, 80, 40);
  
  fill("orange");
  square(150, 150, 30);
  square(150, 230, 30);
  square(230, 230, 30);
  square(230, 150, 30);

  

  

}
