function setup() {
  createCanvas(800, 800);
  background("white");
}

function draw() {
  
  stroke("rgb(0,165,250)");
  fill("rgb(241,29,253)");

    if (mouseIsPressed) {
    rect(mouseX, mouseY, 80, 80); 
    }
}