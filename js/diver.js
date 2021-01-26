class Diver {
    constructor() {
        //score of collected rubbish pieces
        this.rubbishScore = 0;
        //number of dead dwellers
        this.deadDwellers = 0;
        //gravity of the diver
        this.gravity = 0.0035;
        //velocity of the diver up/down
        this.velocity = 0;
        //speed of the diver forward/backward
        this.speed = 0;
        //width and heigth of the diver image
        this.width = 350;
        this.height = 150;
        //divers starting point horizontal axis
        this.x = 40;
        //divers starting point vertical axis
        this.y = 0.3* height;
    }

    diveUp() {
       this.velocity = -2.5;
    } 

    diveDown() {
        this.velocity = +2.5;
     } 
    
    diveForward() {
        this.speed = +2;
    }

    diveBack() {
        this.speed = -2.5;
    }

    draw() {

        //draw diver's vertical position
        this.velocity += this.gravity;
        this.y += this.velocity;

        //restrictions max window vertically bottom
        if (this.y >= height - this.height -30) {
            this.y = height - this.height - 30;
        }
        //restrictions max window vertically top
        if (this.y <= 0.3* height) {
            this.y = 0.3*height;
        }

        //draw diver's horizontal position
        this.x += this.speed;

        //restrictions max window horizontal right
        if (this.x >= width - this.width) {
            this.x = width - this.width;
        }
        //restrictions max window horizontal left
        if (this.x <= 0) {
            this.x = 0;
        }

        //draw diver
        image(game.diverImage, this.x, this.y, this.width, this.height);
    }

}