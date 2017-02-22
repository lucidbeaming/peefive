var i=0;
var left=0;
var right=0;
var top=0;
var heavy=0;


function setup(){
  createCanvas(windowWidth-20,400);
  background(10);
}


function draw(){
  
  i++;
  if (i>10) { i = 0}
left = i*40;
  right = (windowWidth - left)-20;
  up = i*40;
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  heavy = random(1, i*20);
  w= heavy;
var lineelement = new Thing(left,up,right,up,r,g,b,w);
  lineelement.display();  

}

function Thing(x,y,x2,y2,r,g,b,w){
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.r = r;
  this.g = g;
  this.b = b;
  this.display = function(){
    strokeWeight(w);
    stroke(this.r,this.g,this.b);
  line(this.x,this.y,this.x2,this.y2);
  }
}



