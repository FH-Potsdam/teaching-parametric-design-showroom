


let colorValue="red"

function setup() 
{
  createCanvas(400, 400);
}

function draw() {
  
  background (colorValue);
  fill("blue");

  let t = map(mouseX, 0, width, -10, 10);
  curveTightness(t);

  for(let i = 0; i < 50; i += 1) {
    for(let y = 0; y < 10; y +=1)
      circle(10 * i, 300 * y, 200);}
  
      
      
     
      
    beginShape();
    

    curveVertex(200, 400);
    curveVertex(100, 600);
    curveVertex(200, 360);
    curveVertex(250, 230);
    curveVertex(200, 50);
    curveVertex(0, 150);
    curveVertex(400, 200);
    curveVertex(200, 300);
    curveVertex(10, 600);
   
       
    endShape(CLOSE);


          


         


         
        }
          
          





   

   
   
     
    
      
  

 

 
  
    
  
