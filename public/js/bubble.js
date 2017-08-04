function Bubble(term, value) {
  this.term = term;
  this.value = value;
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.v = createVector(width/2, height/2);
  this.vel = createVector(1.5, 1.5);
  this.diameter = function(){
    return 15 + ((value / largestValue()) * 190);
  };

  this.radius = this.diameter/2;

  this.display = function() {
    fill(this.r, this.g, this.b, 127);

    ellipse(this.v.x, this.v.y, this.diameter(), this.diameter());

    textSize(32);
    textAlign(CENTER);
    fill(255);
    text(this.term, this.v.x, this.v.y);
  }

  this.move = function() {
    this.v.add(this.vel);
    if (this.v.x > width || this.v.x < 0) {
      this.vel.x *= -1;
    }
    if (this.v.y > height || this.v.y < 0 ) {
      this.vel.y *= -1;
    }
  }
}

var largestValue = function() {
  if (bubbles.length == 0) {
    return 1;
  };
  var bubbleVals = bubbles.map(function(bubble){
    return bubble.value;
  });
   return Math.max.apply(Math, bubbleVals);
}
