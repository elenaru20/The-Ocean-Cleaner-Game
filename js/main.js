const game = new Game();

function preload() {   
    game.preload();
}

function setup() {
    //setting up the total screen size
    createCanvas(2000, 1450);
    game.setup();
}

function draw() {
    //draw the game on the screen
    game.draw();
}

function keyPressed() {
    if (keyCode === 38) {
        game.diver.diveUp();
    }

    if (keyCode === 40) {
        game.diver.diveDown();
    }

    if (keyCode === 39) {
        game.diver.diveForward();
    }

    if (keyCode === 37) {
        game.diver.diveBack();
    }

}