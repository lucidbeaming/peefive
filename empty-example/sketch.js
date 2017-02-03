var phun = 1.7;
var phan = 1.6;
var phin = 1.61;
var phon = 1.69;
var x = 5;
var y = 5;
var x2 = 700;
var y2 = 200;
var bigly = 4;
var phunk,phank,phink,phonk = 0;

function mx(){
	var blorp = mouseX / 1200;
	if (blorp > 1) {
		blorp = 1
	}
	return blorp;
}

function my(){
	var blorp = mouseY / 600;
	if (blorp > 1) {
		blorp = 1
	}
	return blorp;
}

function setup() {
	createCanvas(1200,600);
	background(51, 0, 0);
	stroke(204, 102, 0, 40);
	fill(177, 104, 32, 30);
}

function draw() {
  if (x>=1199 || x<=2) { 
  	blerp = mx();
  	phun = phun * -1;
  	if (phun < 0) {
  		blerp=blerp * -1;
  	}
  	phunk = phun + (blerp * bigly);
  }
  if (y>=599 || y<=2) { 
  	blerp = my()
  	phan = phan * -1;
  	if (phan < 0) {
  		blerp=blerp * -1;
  	}
  	phank = phan + (blerp * bigly);  	
  }
  if (x2>=1199 || x2<=2) { 
  	blerp = mx();
  	phin = phin * -1;
  	if (phin < 0) {
  		blerp=blerp * -1;
  	}
  	phink = phin + (blerp * bigly);  	
  }
  if (y2>=599 || y2<=2) { 
  	blerp = my();
  	phon = phon * -1;
   	if (phun < 0) {
  		blerp=blerp * -1;
  	}
  	phonk = phon + (blerp * bigly); 	
  }
  vmouse = mx();
  hmouse = my();
  

  x=x+phunk;
  y=y+phank;
  x2=x2+phink;
  y2=y2+phonk;

  line(x,y,x2,y2);
  ellipse(x,y,random(2,7),random(2,7));
  // ellipse(x2,y2,random(2,4),random(2.4));
  console.log (x + "," + y + "," + x2 + "," + y2);
  console.log (mx() + ", " + my());
}