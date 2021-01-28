class OceanDweller {
    constructor(image) {
        this.image = image;
        this.width = 150;
        this.height = 80;
        
        this.x = width;

        this.y = 0.3* height + (Math.random() * height);
        if (this.y >= height - this.height -50) {
            this.y = height - this.height - 50;
        }
    }

    catch(diverPosition) {

        //get middle of the dweller
        let dwellerX = this.x + this.width/2;
        let dwellerY = this.y + this.height/2;

        // get tip of the diver's harpoon
        let harpoonX = diverPosition.x + diverPosition.width;
        let harpoonY = diverPosition.y + diverPosition.height * 0.8;

        //measure distance between diver's harpoon and rubbish piece
        if(dist(dwellerX, dwellerY, harpoonX, harpoonY) > 60) {
            return false;
        } else {
            game.diver.deadDwellers -= 1;
            game.gameLogic();

            console.log(game.diver.deadDwellers);

            document.querySelector('.deadDwellers').innerText = game.diver.deadDwellers;

            console.log(document.querySelector('.deadDwellers').innerText);

            document.querySelector('.percentage').innerText = game.calcProportion(game.diver.rubbishScore, game.diver.deadDwellers)
            
            return true;
        }
    }


    draw() {
        this.x--;
        image(this.image, this.x, this.y, this.width, this.height)
    }

}