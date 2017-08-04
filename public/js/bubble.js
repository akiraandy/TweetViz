function Bubble(value) {
  this.x = width/2;
  this.y = height/2;
  this.xspeed = 1;
  this.yspeed = 1;

  this.diameter = map(value, 1, value, 10, 25);

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter)
  }

  this.move = function() {
    this.x += 1 * this.xspeed;
    this.y += 1 * this.yspeed;
    if (this.x > width || this.x < 0) {
      this.xspeed *= -1;
    }
    if (this.y > height || this.y < 0 ) {
      this.yspeed *= -1;
    }
  }
}
