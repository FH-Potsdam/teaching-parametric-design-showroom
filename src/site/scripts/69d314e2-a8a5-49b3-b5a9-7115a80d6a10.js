let coswave = [];
let bug;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < width; i++) {
    let amount = map(i, 0, width, 0, PI);
    coswave[i] = abs(sin(amount));
  }
  background(255); //122, 202, 136
  bug = new Jitter();
}

function draw() {
  let y1 = 0;
  let y2 = width;
  for (let i = 0; i < width; i += 3) {
    stroke((coswave[i] * 500) / 2);
    line(i, y1, i, y2);
  }
  bug.move();
  bug.display();
}

class Jitter {
  constructor() {
    this.x = 200, 200;
    this.y = 200, 200;
    this.diameter = random(10, 20);
    this.speed = 2;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
