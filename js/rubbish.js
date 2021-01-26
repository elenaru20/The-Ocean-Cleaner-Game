class Rubbish {
    constructor(image) {
        this.image = image;
        this.width = 100;
        this.height = 100;
        
        this.x = width;

        this.y = 0.3* height + (Math.random() * height);
        if (this.y >= height - this.height -30) {
            this.y = height - this.height - 30;
        }
    }

    collect(diverPosition) {

        //get middle of the rubbish piece
        let rubbishX = this.x + this.width/2;
        let rubbishY = this.y + this.height/2;

        // get tip of the diver's harpoon
        let harpoonX = diverPosition.x + diverPosition.width;
        let harpoonY = diverPosition.y + diverPosition.height * 0.8;

        //measure distance between diver's harpoon and rubbish piece
        if(dist(rubbishX, rubbishY, harpoonX, harpoonY) > 60) {
            return false;
        } else {
            game.diver.rubbishScore += 1;
            
            console.log(game.diver.rubbishScore);

            document.querySelector('.rubbishScore').innerText = game.diver.rubbishScore;

            console.log(document.querySelector('.rubbishScore').innerText);

            document.querySelector('.percentage').innerText = game.calcProportion(game.diver.rubbishScore, game.diver.deadDwellers)

            return true;
        }
    }
    
    draw() {
        this.x--;
        image(this.image, this.x, this.y, this.width, this.height)
    }

}