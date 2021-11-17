const sketchWidth = 400;
const sketchHeight = 400;

function setup () {
  createCanvas(sketchWidth, sketchHeight);
}

function draw () {
noLoop()
background(240)
  line(60, 100, 275, 100);
  line(65, 130, 277, 130);
  line(55, 160, 290, 160);
  line(70, 190, 310, 190);
  line(77, 220, 320, 220);
  line(85, 250, 320, 250);

  //right to left diagonal
   beginShape(); 
  vertex(83, 220);
  vertex(100, 250);
  endShape(CLOSE)
  
  beginShape(); 
  vertex(60, 100);
  vertex(140, 250);
  endShape(CLOSE)

  beginShape(); 
  vertex(100, 100);
  vertex(180, 250);
  endShape(CLOSE)

  beginShape(); 
  vertex(140, 100);
  vertex(220, 250);
  endShape(CLOSE)

  beginShape(); 
  vertex(180, 100);
  vertex(260, 250);
  endShape(CLOSE)

  beginShape(); 
  vertex(220, 100);
  vertex(300, 250);
  endShape(CLOSE)

  beginShape(); 
  vertex(260, 100);
  vertex(275, 130);
  endShape(CLOSE)
   

  //left to right diagonal
  
  
  beginShape();
  vertex(55, 160);
  vertex(100, 100);
  endShape(CLOSE)
  
  beginShape();
  vertex(70, 190);
  vertex(140, 100);
  endShape(CLOSE)
  
  beginShape();
  vertex(83, 220);
  vertex(180, 100);
  endShape(CLOSE)
  
  beginShape(); 
  vertex(100, 250);
  vertex(220, 100);
  endShape(CLOSE) 

  beginShape(); 
  vertex(140, 250);
  vertex(260, 100);
  endShape(CLOSE) 

  beginShape(); 
  vertex(180, 250);
  vertex(285, 120);
  endShape(CLOSE) 

  beginShape(); 
  vertex(220, 250);
  vertex(290, 160);
  endShape(CLOSE) 

  beginShape(); 
  vertex(260, 250);
  vertex(310, 190);
  endShape(CLOSE) 

  beginShape(); 
  vertex(300, 250);
  vertex(320, 220);
  endShape(CLOSE) 
  
}



