let bgColor;
let lastColorChange = 0;


function setup() {
  createCanvas(800, 600);
  bgColor = color(220); 
}

function draw() {
  background(bgColor);

  if (keyIsDown(82)) {
    if (millis() - lastColorChange > 500) { // Add a half a second delay to each color change
        
       let randomNum = random(255);
       bgColor = color(randomNum);
        
        lastColorChange = millis(); // Update the time of the last color change
    }
  }
}