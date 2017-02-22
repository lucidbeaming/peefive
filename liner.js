var i=0;
var left=0;
var right=0;
var top=0;


function setup(){
  createCanvas(windowWidth-20,400);
  background(10);
}


function draw(){
  
  i++;
  if (i>10) { i = 0}
left = i*10;
  right = (windowWidth - left)-20;
  up = i*40;
var lineelement = new Thing(left,up,right,up,40,200,100);
  lineelement.display();  

}

function Thing(x,y,x2,y2,r,g,b){
  this.x = x;
  this.y = y;
  this.x2 = x2;
  this.y2 = y2;
  this.r = r;
  this.g = g;
  this.b = b;
  this.display = function(){
    stroke(this.r,this.g,this.b);
  line(this.x,this.y,this.x2,this.y2);
  }
}



