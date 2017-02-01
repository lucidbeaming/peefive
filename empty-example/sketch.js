var phun = 1.7;
var phan = 1.6;
var phin = 1.61;
var phon = 1.69;
var x = 5;
var y = 5;
var x2 = 700;
var y2 = 200;

function setup() {
	createCanvas(1200,600);
	background(51, 0, 0);
	stroke(204, 102, 0, 40);
	fill(177, 104, 32, 30);
}

function draw() {
  if (x>=1199 || x<=2) { 
  	phun = (phun * -1) + ((mouseX / 1200)*4);
  }
  if (y>=599 || y<=2) { 
  	phan = (phan * -1) + ((mouseY / 600)*4);
  }
  if (x2>=1199 || x2<=2) { 
  	phin = (phin * -1) + ((mouseX / 1200)*4);
  }
  if (y2>=599 || y2<=2) { 
  	phon = (phon * -1) + ((mouseY / 600)*4);
  }
  x=x+phun;
  y=y+phan;
  x2=x2+phin;
  y2=y2+phon;

  line(x,y,x2,y2);
  ellipse(x,y,random(2,7),random(2,7));
  // ellipse(x2,y2,random(2,4),random(2.4));
  console.log (x + "," + y + "," + x2 + "," + y2)
}