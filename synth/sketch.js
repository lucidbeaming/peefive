var playing1, playing2, osc1obj, osc2obj;
var osctypes = ['sine', 'triangle', 'sawtooth', 'square']

function setup() {
    createCanvas(720, 256);

    osc1 = new p5.SinOsc(); // set frequency and type
    osc2 = new p5.SinOsc();
    osc1.amp(.5); // set volume to osc1
    osc2.amp(.5); // set volume to osc2

    fft1 = new p5.FFT();
    fft2 = new p5.FFT();
    fft1.setInput(osc1); // send osc1 to fft1
    fft2.setInput(osc2); // send osc2 to fft2
    amplitude = new p5.Amplitude();

    osc1obj = select('#osc1');
    osc2obj = select('#osc2');

    radio1 = createRadio('osc1controls');
    radio1.option("sin", 0);
    radio1.option("tri", 1);
    radio1.option("saw", 2);
    radio1.option("sqr", 3);
    radio1.style('width', '100px');
    textAlign(CENTER);
    fill(0, 180, 0);

    radio2 = createRadio('osc2controls');
    radio2.option("sin", 0);
    radio2.option("tri", 1);
    radio2.option("saw", 2);
    radio2.option("sqr", 3);
    radio2.style('width', '100px');
    textAlign(CENTER);
    fill(0, 180, 0);

    osc1obj.child(radio1);
    osc2obj.child(radio2);

    radio1.value('0');
    radio2.value('0');
}

function draw() {

    background(255);

    var waveform1 = fft1.waveform(); // analyze the 1st waveform
    beginShape();
    strokeWeight(5); // how thick is line
    stroke('red'); // enter color or (R, G, B) values
    for (var i = 0; i < waveform1.length; i++) {
        var x = map(i, 0, waveform1.length, 0, width);
        var y = map(waveform1[i], -1, 1, height, 0);
        vertex(x, y);
    }
    endShape();

    var waveform2 = fft2.waveform(); // analyze the 2nd waveform
    beginShape();
    strokeWeight(5); // how thick is line
    stroke('blue'); // enter color or (R, G, B) values
    for (var i = 0; i < waveform2.length; i++) {
        var x = map(i, 0, waveform2.length, 0, width);
        var y = map(waveform2[i], -1, 1, height, 0);
        vertex(x, y);
    }
    endShape();

    // change osc1illator frequency based on mouseX
    var freq = map(mouseX, 0, width, 40, 880);
    osc1.freq(freq);
    osc2.freq(freq);

    var amp = map(mouseY, 0, height, 1, .01);
    osc1.amp(amp);
    osc2.amp(amp);
}
// Listen for Key Toggle
function keyPressed() {
    if (keyCode == 49) { // key = "1"
        if (!playing1) {
          playing1 = true;
          osc1.start();
        } else {
          playing1 = false;
          osc1.stop();
        }
        return false; // prevent default
    }
    if (keyCode == 50) { // key = "2"
        if (!playing2) {
          playing2 = true;
          osc2.start();
        } else {
          playing2 = false;
          osc2.stop();
        }
        return false; // prevent default
    }
}

function mouseClicked() {
    var r1 = radio1.value();
    var r2 = radio2.value();

    osc1.setType(osctypes[r1]);
    osc2.setType(osctypes[r2]);
    console.log('osc1 wave = ' + osctypes[r1] + ', osc2 wave = ' + osctypes[r2]);
}
