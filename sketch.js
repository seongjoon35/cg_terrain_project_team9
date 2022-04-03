var cols, rows;
var scl = 20;
var w = 1400;
var h = 1000;
var d = 1000;
var flying = 0;
let x=900;
let px=1;
//변수지정
var terrain = [];

function preload() {
  obj = loadModel('obj.obj');
  warship = loadModel('warship.obj')
}
//3d모델 load

function setup() {
createCanvas(600, 600, WEBGL);
//배경설정
cols = w / scl;
rows = h / scl;

for (var x = 0; x < cols; x++) {
terrain[x] = [];
for (var y = 0; y < rows; y++) {
terrain[x][y] = 0;
}
}
noStroke(); //3차원지형 설정
}

function draw() {
  
  flying -= 0.01;
  
let locX = mouseX - height / 2;
let locY = mouseY - width / 1.5;
if(mouseIsPressed){
camera(0, 0, 20 + abs(sin(frameCount * 0.01)) * 500, 0, 0, 0, 0, 1, 0); //바다 확대 camera
}
ambientLight(60, 60, 60);
pointLight(255, 255, 255, locX, locY, 100);
  var yoff = flying;
for (var y = 0; y < rows; y++) {
var xoff = 0;
for (var x = 0; x < cols; x++) {
terrain[x][y] = map(noise(xoff, yoff), 0, 1, -20, 20); //3차원지형의 noise값 설정
xoff += 10;
}
yoff += 4;
}
  
background(0);
push()
ambientMaterial(200,50,30); //등대만들기
rotateX(PI/1.1)
translate(-300,70,400)
scale(1.5)
model(obj)
pop()
  
translate(0, 50);
rotateX(PI / 3);
translate(-w/2, -h/2);
for (var y = 0; y < rows - 1; y++) {
beginShape(TRIANGLE_STRIP); //TRIANGLE_STRIP으로 3차원지형생성
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
  ambientMaterial(188,188,188,200); //군함 만들기
  translate(220+px,400,10);
  rotateX(PI / 1.5);
  scale(3);
  model(warship);
  pop();
  
  push(); 
  ambientMaterial(70,50,255); //상어 지느러미 만들기
  translate(mouseX+408, mouseY*1.35, 0);
  rotateX(PI / 1.5)
  cone(15,80);
  pop();
  
  push(); //달 만들기
  rotate(PI/5);
  fill(255,255,0);
  translate(40-(w/5)+px,(50-h/2),250);
  sphere(20);
  if(px>2*width)px = 1;
  px = px + 1;
  pop();
 
  
}
