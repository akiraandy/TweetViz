function setup() {
  createCanvas(640, 480);
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
