
var v1;
var v2;
var v3;
var v4;
var v5;
var v6;
var v7;
var v8;
var v9;
var v10;


function setup() {
  createCanvas(600,600);  
  
  v1 = createSprite(300, 0, 600, 100);
  v2 = createSprite(300, 600, 600, 100);
  v5 = createSprite(0, 300, 100, 600);
  v6 = createSprite(600, 200, 100, 500);
  v7 = createSprite(200, 100, 300, 100);
  v8 = createSprite(100, 350, 100, 200);
  v9 = createSprite(400, 350, 100, 200);
  v10 = createSprite(300, 500, 100, 100);
  
  v3 = createSprite(300, 300,100,100);
  v4 = createSprite(300, 300,100,100);
 
  
}


function draw() {
  background(255,255,255);  
  
  v4.velocity.x = (mouseX-v4.position.x)/10;
  v4.velocity.y = (mouseY-v4.position.y)/10;
  
  
  v4.collide(v1);
  v4.collide(v2);
  v4.collide(v5);
  v4.collide(v6);
  v4.collide(v7);
  v4.collide(v8);
  v4.collide(v9);
  
  v3.collide(v1);
  v3.collide(v2);
  v3.collide(v5);
  v3.collide(v6);
  v3.collide(v7);
  v3.collide(v8);
  v3.collide(v9);
  v3.collide(v10);
  
  v10.collide(v1);
  v10.collide(v2);
  v10.collide(v5);
  v10.collide(v6);
  v10.collide(v7);
  v10.collide(v8);
  v10.collide(v9);
  v10.collide(v4);
  
  
  
  v4.displace(v3);
  v4.displace(v10);
  
 
  
  drawSprites();
}