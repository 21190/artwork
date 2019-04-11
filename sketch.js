function setup() {

  createCanvas(700, 700);
  xpos = 100
  ypos = 150
  xspeed = 10
  yspeed = 10
}

function draw() {
  background(255,183,193);
  for (i = 0; i < 7; i++) {
  fill(0, 0, 0)
    ellipse(xpos + i * 50, ypos + i * 50, 100 + (frameCount % 30) * 10, 50);
 
  }


  xpos += xspeed
  ypos += yspeed
  if (300 + xpos > 700 || xpos < 0) {
    xspeed = -xspeed

  }
  if (300 + ypos > 700 || ypos < 0) {
    yspeed = -yspeed
  }
}
