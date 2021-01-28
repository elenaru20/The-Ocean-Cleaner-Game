const game = new Game();
const canvasX = 2000;
const canvasY = 1450;

function preload() {   
    game.preload();
   // game.oceanSounds.play();
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
    //arrow up
    if (keyCode === 38) {
        game.diver.diveUp();
    }

    //arrow down
    if (keyCode === 40) {
        game.diver.diveDown();
    }

    //arrow right
    if (keyCode === 39) {
        game.diver.diveForward();
    }

    // arrow left
    if (keyCode === 37) {
        game.diver.diveBack();
    }

    //space to shoot
    if (keyCode === 32) {
        game.shoot();
    }

}