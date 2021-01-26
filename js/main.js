const game = new Game();
const canvasX = 2000;
const canvasY = 1450;

function preload() {   
    game.preload();
}

function setup() {
    //setting up the total screen size
    let canvas = createCanvas(canvasX , canvasY);   
    canvas.parent("game")
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