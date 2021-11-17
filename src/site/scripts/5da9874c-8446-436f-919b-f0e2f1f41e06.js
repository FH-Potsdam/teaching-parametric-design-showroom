const sketchHeight = 400;
const sketchWidth = 400;

function setup() {
        createCanvas(sketchHeight, sketchWidth);
}

function draw() {
      noLoop();
      background(random(100,255));
      
      noFill();
      stroke("black");
    
      let radius = 200;
       
      let maxCount = random(15,30);
      for (let circleCount = 0; circleCount < maxCount; circleCount += 1) {
        let theta = (Math.PI / 180) * (360 / maxCount * circleCount + 90);
    
        let x = radius / 2 * cos(theta);
        let y = radius / 2 * sin(theta);
    
        circle(
          x + sketchWidth / 2,
          y + sketchHeight / 2,
          radius
        );
      }
      radius = 70
      maxCount = 6;
    for (let circleCount = 0; circleCount < maxCount; circleCount += 1) {
    let theta = (Math.PI / 180) * (360 / maxCount * circleCount + 90);

    let x = radius / 2 * cos(theta);
    let y = radius / 2 * sin(theta);
    }
}

      
