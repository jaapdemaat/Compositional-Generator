//FF JDM V1 01.01.2022
// First sketch, creating a grip of black and white triangle shapes.
// Click to change fill.
// Key press "s" to save canvas to local disk
// CSS Center sketch + White background

let isBlack1 = false;
let isBlack2 = false;
let isBlack3 = false;
let isBlack4 = false;
let isBlack5 = false;
let isBlack6 = false;
let isBlack7 = false;
let isBlack8 = false;
let isBlack9 = false;
let isBlack10 = false;
let isBlack11 = false;
let isBlack12 = false;
let isBlack13 = false;
let isBlack14 = false;
let isBlack15 = false;
let isBlack16 = false;




function setup() {
  
  createCanvas(400, 420);
 
  

  
  
}

function draw() {
   background(255);
  noStroke();
  
//noSmooth();
  
  //Up pointing right
  fill(isBlack1 ? 255 : 0);
  triangle(0, 0, 0, 200, 100, 100);
  fill(isBlack2 ? 255 : 0);
  triangle(200, 0, 200, 200, 300, 100);

  // //Up pointing left
  // fill(isBlack3 ? 255 : 0);
  // triangle(200, 0, 200, 200, 100, 100);
  // fill(isBlack4 ? 255 : 0);
  // triangle(400, 0, 400, 200, 300, 100);

  //Top Row pointing down
  fill(isBlack5 ? 255 : 0);
  triangle(0, 0, 200, 0, 100, 100);
  fill(isBlack6 ? 255 : 0);
  triangle(200, 0, 400, 0, 300, 100);

  //    //Top Row pointing down
  fill(isBlack13 ? 255 : 0);
  triangle(0, 200, 200, 200, 100, 100);
  fill(isBlack14 ? 255 : 0);
  triangle(200, 200, 400, 200, 300, 100);

  //Bottom Row pointing down
  fill(isBlack15 ? 255 : 0);
  triangle(0, 200 + 200, 200, 200 + 200, 100, 100 + 200);
  fill(isBlack16 ? 255 : 0);
  triangle(200, 200 + 200, 400, 200 + 200, 300, 100 + 200);

  //Bottom pointing right
  fill(isBlack7 ? 255 : 0);
  triangle(0, 0 + 200, 0, 200 + 200, 100, 100 + 200);
  fill(isBlack8 ? 255 : 0);
  triangle(200, 0 + 200, 200, 200 + 200, 300, 100 + 200);

  //Bottom pointing left
  fill(isBlack9 ? 255 : 0);
  triangle(200, 0 + 200, 200, 200 + 200, 100, 100 + 200);
  fill(isBlack10 ? 255 : 0);
  triangle(400, 0 + 200, 400, 200 + 200, 300, 100 + 200);

  //Top Row pointing down
  fill(isBlack11 ? 255 : 0);
  triangle(0, 0 + 200, 200, 0 + 200, 100, 100 + 200);
  fill(isBlack12 ? 255 : 0);
  triangle(200, 0 + 200, 400, 0 + 200, 300, 100 + 200);
  
  
  
  
// Fetch the current time
var se = second();
var mi = minute();
var h = hour();
// var d = day();
// var m = month();
// var y = year ();
    
  

  
  
  // display 1/0 in digits
  
fill(0);
textSize(12);
textFont("Roboto Mono");
  

textAlign(CENTER);
text(("FFJDM") + '.' +(isBlack1+0) + '.'
    + (isBlack2+0) + '.'
    + (isBlack3+0) + '.'
    + (isBlack4+0) + '.'
    + (isBlack5+0) + '.'
    + (isBlack6+0) + '.'
    + (isBlack7+0) + '.'
    + (isBlack8+0) + '.'
    + (isBlack9+0) + '.'
    + (isBlack10+0) + '.'
    + (isBlack11+0) + '.'
    + (isBlack12+0) + '.'
    + (isBlack13+0) + '.'
    + (isBlack14+0) + '.'
    + (isBlack15+0) + '.'
    + (isBlack16+0)
     
, 135, 420);
  

}

function mouseClicked() {
  isBlack1 = Math.random() > 0.5;
  isBlack2 = Math.random() > 0.5;
  isBlack3 = Math.random() > 0.5;
  isBlack4 = Math.random() > 0.5;
  isBlack5 = Math.random() > 0.5;
  isBlack6 = Math.random() > 0.5;
  isBlack7 = Math.random() > 0.5;
  isBlack8 = Math.random() > 0.5;
  isBlack9 = Math.random() > 0.5;
  isBlack10 = Math.random() > 0.5;
  isBlack11 = Math.random() > 0.5;
  isBlack12 = Math.random() > 0.5;
  isBlack13 = Math.random() > 0.5;
  isBlack14 = Math.random() > 0.5;
  isBlack15 = Math.random() > 0.5;
  isBlack16 = Math.random() > 0.5;
  
  }
    
// We use the key pressed function here
function keyPressed() {

// If you hit the s key, save an image
  if (key == 's') {
  saveCanvas("FFJDMV1.png");
  
  }
  
  
  
  
  
}
