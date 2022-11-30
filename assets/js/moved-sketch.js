
function setup() {
  var cnv1 = createCanvas(windowWidth, windowHeight);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) /2;
  cnv1.position(x, y);
  cnv1.class("canvas");

  textSize(width / 10);
  textAlign(CENTER, CENTER);
}

function draw() {
  let time = millis();
  translate(width/2, height/2);
  translate(p5.Vector.fromAngle(millis() / 1000, 100));
  // rotateX(time / 1000);
  // rotateZ(time / 1234);
  text('moved', mouseX, mouseY);
  fill('#e6405c');
  blendMode(DIFFERENCE);
}
