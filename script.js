let lastPos = {x:0, y:0};

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
    background(240,240,220);
    text("press any key to clear",10,10);
}

function mouseMoved() {
	let newPos = {x:mouseX, y:mouseY};
    stroke(random(250),random(250),random(250));
    line(lastPos.x, lastPos.y, newPos.x, newPos.y);
	lastPos = newPos;
    strokeWeight(random(1,20));
}

function keyPressed() {
    background(random(255),random(255),random(255));
}

function mousePressed() {
	saveCanvas("drawing", "png");
}