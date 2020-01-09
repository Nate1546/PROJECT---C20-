// J.S Harrison
// PROJECT C- 20 "CHANGE THE BACKGROUND"

var x=0;
var y=0;
var z=0;

function setup() {
  noStroke();
  createCanvas(800,600);
}

function draw() {
   x = map(mouseX, 0, width,25,240,true);
   let y = map(mouseY,0, width,50,250, true);
   let  z = map(mouseY, 0, width, 0,45, true);
  background(x,y,z);
   fill(x,255 - y,z);
  ellipse(mouseX,mouseY, 45 );
  fill(255 - x,y,z);
  textSize(40);
  text("Harrison is a good student",200,200);  
 

}


// END