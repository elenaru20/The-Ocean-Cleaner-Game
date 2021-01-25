class Game {
    constructor() {
        this.backgroundImageFixed1;
        this.backgroundImageFixed2;
        this.backgroundMovingImages;
    }

    setup() {
        this.background = new Background();
    }

    preload() {

        this.backgroundImageFixed1 = loadImage('/assets/background/Hintergrund_oben_freigestellt.png');
        this.backgroundImageFixed2 = loadImage('/assets/background/ship-boat-cartoon.png');

        this.backgroundMovingImages = [
            {src: loadImage('/assets/background/Hintergrund_unten_freigestellt.png'), x: 0, speed: 1.8},
            {src: loadImage('/assets/background/Hintergrund_unten_freigestellt.png'), x: 0, speed: 1.5},
            {src: loadImage('/assets/background/Hintergrund_unten_freigestellt.png'), x: 0, speed: 1}
        ]



    }

    draw() {
        //clear();
        console.log("testdraw")
        this.background.draw();
        
    }
}