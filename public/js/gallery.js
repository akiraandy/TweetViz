function setup() {

  createCanvas(640, 480);
  background(0);
  bubbles = [];
  var bubble = new Bubble(20);
  bubbles.push(bubble);
};

function draw(){
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }
};
