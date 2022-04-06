const screenWidth = document.documentElement.clientWidth;
const screenHeight = document.documentElement.clientHeight;

function setup() {
	createCanvas(screenWidth, screenHeight);
	background(255, 255, 0);
}

function draw() {
	ellipse(mouseX, mouseY, 100);
}

function touchMoved() {
	return false;
}

function touchStarted() {
	console.log(mouseX, mouseY);
	r = random(255);
	g = random(255);
	b = random(255);
	background(r, g, b);
	fill(255 - r, 255 - g, 255 - b);
}
