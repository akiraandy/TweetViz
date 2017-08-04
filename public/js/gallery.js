function setup() {
  createCanvas(800, 640);
  ellipseMode(RADIUS);
  bubbles = [];
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    largestValue();
    bubbles[i].display();
    bubbles[i].move();
  }

}
