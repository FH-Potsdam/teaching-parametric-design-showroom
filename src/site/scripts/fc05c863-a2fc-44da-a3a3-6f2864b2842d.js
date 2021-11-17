function setup() {
  const size = min(windowWidth, windowHeight);
  createCanvas(size,size);
  colorMode(RGB,1);
  noStroke();
}

const radius = 0.7;
const dotSize = 0.2;

function draw(){
  scale(width,height);
  background(0);
  fill(1);

  const count = 100;
  for (let i=0; i<count; i++) {
    const f = i/count;
    const a = f;
    const dist = f * radius;
    const x = 0.5 + cos(a * 8 * TWO_PI) * dist;
    const y = 0.5 + sin(a * 8 * TWO_PI) * dist;
    const r = f * dotSize;
    circle(x,y,r);
  }
}
