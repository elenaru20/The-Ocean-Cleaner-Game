class Game {
    constructor() {
        this.backgroundImageFixed1;
        this.backgroundImageFixed2;
        this.backgroundImageFixed3;
        this.backgroundMovingImages;

        this.rubbishImage;
    }

    setup() {
        this.diver = new Diver();
        this.background = new Background();  
        this.rubbishPieces = [];
        
    }

    preload() {

        this.backgroundImageFixed1 = loadImage('/assets/background/Hintergrund_oben_freigestellt.png');
        this.backgroundImageFixed2 = loadImage('/assets/background/ship-boat-cartoon.png');
        this.backgroundImageFixed3 = loadImage('/assets/background/Hintergrund_unten_freigestellt.png');

        this.backgroundMovingImages = [
            {src: loadImage('/assets/background/Hintergrund_unten_freigestellt.png'), x: 0, speed: 1},
            {src: loadImage('/assets/background/Hintergrund_unten_freigestellt.png'), x: 0, speed: 1.5},
            {src: loadImage('/assets/background/Hintergrund_unten_freigestellt.png'), x: 0, speed: 2.5},
            {src: loadImage('/assets/background/Hintergrund_Untergrund_freigestellt.png'), x: 0, speed: 2.5}
        ]

        this.diverImage = loadImage('/assets/player/Taucher_freigestellt.png');

        this.rubbishImage = loadImage('/assets/rubbish/plastic-bottles.png');
    }

    draw() {
        //console.log("testdraw")
        clear();
        this.background.draw();
        this.diver.draw(); 
        
        if (frameCount % 400 === 0) {
            this.rubbishPieces.push(new Rubbish(this.rubbishImage));
        }

        this.rubbishPieces.forEach(function (piece) {
            piece.draw();
        })


    }
}