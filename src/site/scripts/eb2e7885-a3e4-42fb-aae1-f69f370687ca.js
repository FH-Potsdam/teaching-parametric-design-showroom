let lineHeights = [];

function setup() {
  createCanvas(400, 400);
  frameRate(20);

  for(let x = 0; x < width; x++){
    const lineHeight = random(height);
    lineHeights[x] = lineHeight;
  }
}

function draw() {
  background(100);

  for(let x = 0; x < width; x++){

    lineHeights[x]++;

    const lineHeight = lineHeights[x];
    line(x,0,x,lineHeight);
    fill('pink');
  }
}

