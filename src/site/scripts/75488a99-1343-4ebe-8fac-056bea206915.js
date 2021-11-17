const sketchHeight = 400;
const sketchWidth = 400;


function setup() {
  createCanvas(sketchWidth, sketchHeight);

}



function draw(){
 noLoop();
 background(240);
 fill (240);
 
 for (let i= 70; i <= 340; i += 60 ){
   let circleRadius = 60 + i * 0.18
   circle (70, i, circleRadius);
  }
   
  for (let i= 70; i <= 340; i += 60 ){
    let circleRadius = 60 + i * 0.18 
    circle (330, i, circleRadius);
   
  }

  for (let i= 90; i <= 340; i += 60 ){
    let circleRadius = 125 - i * 0.18
    rotate 
    circle (200, i, circleRadius);
  }
} 

//}




 
/*
ellipse (70, 50, circleSize, circleSize);
circleSize = 60
ellipse (70, 90, circleSize, circleSize);
circleSize = 80
ellipse (70, 150, circleSize, circleSize);
circleSize = 100
ellipse (70, 230, circleSize, circleSize);
circleSize = 120
ellipse (70, 320, circleSize, circleSize); 

circleSize = 120
ellipse (200, 70, circleSize, circleSize);
circleSize = 100
ellipse (200, 160, circleSize, circleSize);
circleSize = 80
ellipse (200, 240, circleSize, circleSize);
circleSize = 60
ellipse (200, 300, circleSize, circleSize);
circleSize = 40
ellipse (200, 340, circleSize, circleSize);

ellipse (330, 50, circleSize, circleSize);
circleSize = 60
ellipse (330, 90, circleSize, circleSize);
circleSize = 80
ellipse (330, 150, circleSize, circleSize);
circleSize = 100
ellipse (330, 230, circleSize, circleSize);
circleSize = 120
ellipse (330, 320, circleSize, circleSize); 

for (let i= 45; i <= 340; i += 70 ){
    let circleRadius = 60 + i * 0.18 
    //for (let circleRadius = 10; circleRadius <= 120; circleRadius += 20){
    circle (330, i, circleRadius);
   
  }

*/


/*
function draw(){
 noLoop();
 background(100);
 fill ("white");
 
 for (let i= 70; i <= 340; i += 50 ){
   let circleRadius = 5 + i + 20
   //for (let circleRadius = 10; circleRadius <= 120; circleRadius += 20){
     circle (70, i, circleRadius);
    }
  } 

*/


/*
for(let x = 1; x < 2; x += 1) {
  for(let y = 1; y < 6; y += 1 ) {
    circle(100 * x, 65 * y, 40);
  
    for (let circleSize = 40 ){

    }
  }
}
*/


/*
function draw() {
  noLoop();
  background(100);
  fill("white");
  for(let x = 0; x < 5; x += 1) {
    for (let y = 0; y < 5; y += 1) {
      circle(60 * x, 60 * y, 20);
    
    }
  }
}
*/
