function Bubble(term, value) {
  this.x = width/2;
  this.y = height/2;
  this.xspeed = 1;
  this.yspeed = 1;
  this.term = term;
  this.value = value;

  this.v = createVector(width/2, height/2);
  this.vel = createVector(2, 2);

  this.diameter = ( value * 100 ) / largestValue();

  this.describe = function(){
    console.log(this.term + " diameter is: " + this.diameter);
  };

  this.display = function() {
    fill(255);
    ellipse(this.v.x, this.v.y, this.diameter, this.diameter);

    textSize(32);
    textAlign(CENTER);
    fill(0, 102, 153);
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
    return 100;
  };
  var bubbleVals = bubbles.map(function(bubble){
    return bubble.value;
  });
  console.log("Maxval is: " + Math.max.apply(Math, bubbleVals));
   return Math.max.apply(Math, bubbleVals);
}
