var cols, rows;
var scl = 20;
var w = 1400;
var h = 1000;
var d = 1000;
var flying = 0;
let x=900;
let px=1;

var terrain = [];

function preload() {
  obj = loadModel('obj.obj');
  warship = loadModel('warship.obj')
}

function setup() {
createCanvas(600, 600, WEBGL);

cols = w / scl;
rows = h / scl;

for (var x = 0; x < cols; x++) {
terrain[x] = [];
for (var y = 0; y < rows; y++) {
terrain[x][y] = 0; //specify a default value for now
}
}
noStroke();
}

function draw() {
  
  flying -= 0.01;
  
let locX = mouseX - height / 2;
let locY = mouseY - width / 1.5;
if(mouseIsPressed){
camera(0, 0, 20 + abs(sin(frameCount * 0.01)) * 500, 0, 0, 0, 0, 1, 0);
}
ambientLight(60, 60, 60);
pointLight(255, 255, 255, locX, locY, 100);  
  var yoff = flying;
for (var y = 0; y < rows; y++) {
var xoff = 0;
for (var x = 0; x < cols; x++) {
terrain[x][y] = map(noise(xoff, yoff), 0, 1, -20, 20);
xoff += 10;
}
yoff += 4;
}
background(0);
push()
  ambientMaterial(200,50,30);
  rotateX(PI/1.1)
  translate(-300,70,400)
  scale(1.5)
  model(obj)
  
  pop()
translate(0, 50);
rotateX(PI / 3);
//fill(200, 200, 200);
translate(-w/2, -h/2);
for (var y = 0; y < rows - 1; y++) {
beginShape(TRIANGLE_STRIP);
for (var x = 0; x < cols; x++) {
let v = terrain[x][y];
v = map(v, -100,100,0,255);
fill(v-100,v-100,v);
vertex(x * scl, y * scl, terrain[x][y]);
vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
}
endShape();
}
  push();
  ambientMaterial(188,188,188,200);
  translate(220+px,400,10);
  rotateX(PI / 1.5);
  scale(3);
  model(warship);
  pop();
  push(); 
  ambientMaterial(70,50,255);
  translate(mouseX+408, mouseY*1.35, 0);
  rotateX(PI / 1.5)
  cone(15,80);
  pop();

  if(px>2*width)px = 1;
  px = px + 1;
  pop();
  
  push();
  rotate(PI/5);
  fill(255,255,0);
  translate(40-(w/5)+px,(50-h/2),250);
  sphere(20);
  if(px>2*width)px = 1;
  px = px + 1;
  pop();
 
  
}