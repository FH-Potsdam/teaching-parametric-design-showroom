const sketchHeight = 400;
const sketchWidth = 400;

function setup() {
        createCanvas(sketchHeight, sketchWidth);
}

function draw() {
      noLoop();
      background(150);
      
      stroke("black");
      strokeWeight(10);
      noFill();
        for(let x = 1; x < 5; x += 1) {
        for(let y = 1; y < 5; y += 1) {
        line(10, (sketchHeight/4) * y-10,
             80, (sketchHeight/4)*y-(sketchHeight/4-10));
        }
      }
        for(let x = 1; x < 5; x += 1) {
        for(let y = 1; y < 5; y += 1) {
        line(320, (sketchHeight/4) * y-10,
             390, (sketchHeight/4)*y-(sketchHeight/4-10));
        }
      }
          strokeWeight(20);
          circle(sketchHeight/2, sketchWidth/2, sketchHeight-220);
          
          strokeWeight(5);
          circle(sketchHeight/2, sketchWidth/2, 30);
          circle(sketchHeight/2, sketchWidth-30, 30);
          circle(sketchHeight/2, 30, 30);
    }

      
