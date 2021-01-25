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


    draw() {
        this.x--;
        image(this.image, this.x, this.y, this.width, this.height)
    }

}