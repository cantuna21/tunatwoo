var img;
var theta = 0;
var r, g, b;

function setup() {
  createCanvas(1200, 800, WEBGL);
  r = random(255);
  g = random(255);
  b = random(255);
  img = loadImage("asset/dealwithit.jpg");
}

function draw() {
  background(0);

  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
    background(r, g, b);
  }

  deal();
}

function deal() {
  translate(0, -50, 0);
  push();
  rotateZ(theta * 0.15);
  rotateX(theta * 0.15);
  rotateY(theta * 0.15);
  texture(img);
  box(300, 300, 300);
  pop();
  theta += 0.05;
}

