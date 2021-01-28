class Arrow {
    constructor(image, diverPosition) {
        this.image = image;
        this.width = 30;
        this.height = 30;
        this.x = diverPosition.x + diverPosition.width;
        this.y = diverPosition.y + diverPosition.height * 0.6;
    }

    draw() {
        this.x += 4;
        image(this.image, this.x, this.y, this.width, this.height)
    }

}