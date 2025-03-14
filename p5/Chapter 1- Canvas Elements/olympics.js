function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    background(255, 255, 255);
    noFill();
    strokeWeight(8);
    
    // blue ring 
    stroke(0, 126, 204); 
    ellipse(55, 55, 100);
      
    // yellow ring
    stroke(249, 172, 49);
    ellipse(110, 110, 100);
    
    //black ring
    stroke(0,0,0);
    ellipse(165, 55, 100);
  
    //green ring
    stroke(0,159,61);
    ellipse(230, 110, 100);
  
    //red ring
    stroke(223, 0, 36);
    ellipse(278, 55, 100);
  }