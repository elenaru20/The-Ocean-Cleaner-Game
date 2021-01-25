const game = new Game();

function preload() {   
    game.preload();
}

function setup() {
    createCanvas(2000, 1450);
    game.setup();
}

function draw() {
    game.draw();
}

function keyPressed() {
}