class Game {

    //Logik noch implementieren:
    /*
    wenn fische >5 UND verhältnis von trash/dweller <= 0.5 ==> LOST

    nach 2 minuten ende und anzeige von score ==>timer & anzeige timer

    iteration: next level
    */
    //shoot harpoone, button to count down munition and recharge munition when empty.
    // sound(s) & button an/aus
    //end-screen-HTML
    //start-screen html
    //scorebuttons farbe wenn alles im grünen breich, wenn knapp vor loose rot
    //rocks/elemente die taucher umschiffen muss
    //anderer müll & fische
    //tauchtiefe anzeige

    constructor() {
        this.backgroundImageFixed1;
        this.backgroundImageFixed2;
        this.backgroundImageFixed3;
        this.backgroundMovingImages;

        this.rubbishImage;
        this.oceanDwellerImage;
        this.arrowImage;
        this.diverImage;
        this.timer = 100;
    }

    setup() {
        this.diver = new Diver();
        this.background = new Background();  
        this.rubbishPieces = [];
        this.oceanDwellers = [];  
        this.arrows = [];
    }

    preload() {

        this.backgroundImageFixed1 = loadImage('./assets/background/Hintergrund_oben_freigestellt.png');
        this.backgroundImageFixed2 = loadImage('./assets/background/ship-boat-cartoon.png');
        this.backgroundImageFixed3 = loadImage('./assets/background/Hintergrund_unten_freigestellt.png');

        this.backgroundMovingImages = [
            {src: loadImage('./assets/background/Hintergrund_unten_freigestellt.png'), x: 0, speed: 1},
            {src: loadImage('./assets/background/Hintergrund_unten_freigestellt.png'), x: 0, speed: 1.5},
            {src: loadImage('./assets/background/Hintergrund_unten_freigestellt.png'), x: 0, speed: 2.5},
            {src: loadImage('./assets/background/Hintergrund_Untergrund_freigestellt.png'), x: 0, speed: 2.5}
        ]

        this.diverImage = loadImage('./assets/player/Taucher_freigestellt.png');

        this.rubbishImage = loadImage('./assets/rubbish/plastic-bottles.png');

        this.oceanDwellerImage = loadImage('./assets/oceanDwellers/fish-1331813_960_720.webp');

        this.arrowImage = loadImage('./assets/player/arrow.png');

        this.harpoonSound = createAudio('./assets/sounds/shot.mp3');
        this.oceanSounds = createAudio('./assets/sounds/bbc_underwater_nhu0501803.mp3');
        this.catchRubbishSound = createAudio('./assets/sounds/trash.mp3');
        this.catchDwellerSound = createAudio('./assets/sounds/Dweller.mp3')
    }

    calcProportion(rubbishScore, dwellerScore) {
        console.log('trash', rubbishScore)
        console.log('dweller', dwellerScore)
        
        let num = parseFloat(rubbishScore/Math.abs(dwellerScore)).toFixed(2);
        this.gameLogic();
        if (!isFinite(num)) {
            return parseFloat(rubbishScore).toFixed(2);
        }

        if (isNaN(num)) {
            return parseFloat(Math.abs(dwellerScore)).toFixed(2);
        }
        if (isFinite(num) && !isNaN(num)) {
            return num;
        }    
    }

    shoot() { 
        game.harpoonSound.play();
        this.arrows.push(new Arrow(this.arrowImage, this.diver)); 
        this.diver.munition++;
        console.log('shot', this.diver.munition); 
    }

    filterShots() {

        for (let dweller of this.oceanDwellers) {
            for (let arrow of this.arrows) {
                if(dist(dweller.x + dweller.width/2, dweller.y + dweller.width/2, 
                    arrow.x + arrow.width/2, arrow.y + arrow.width/2) <= 60) {
                        this.oceanDwellers.splice(this.oceanDwellers.indexOf(dweller),1);
                        this.arrows.splice(this.arrows.indexOf(arrow),1);
                        
                        this.catchDwellerSound.play();
                        this.diver.deadDwellers -= 1;
                        this.gameLogic();
                        document.querySelector('.deadDwellers').innerText = this.diver.deadDwellers;
                        console.log(document.querySelector('.deadDwellers').innerText);           
                        document.querySelector('.percentage').innerText = this.calcProportion(this.diver.rubbishScore, this.diver.deadDwellers)
                    }
            }
        }

        for (let rubbish of this.rubbishPieces) {
            for (let arrow of this.arrows) {
                if(dist(rubbish.x + rubbish.width/2, rubbish.y + rubbish.width/2, 
                    arrow.x + arrow.width/2, arrow.y + arrow.width/2) <= 60) {
                        this.rubbishPieces.splice(this.rubbishPieces.indexOf(rubbish),1);
                        this.arrows.splice(this.arrows.indexOf(arrow),1);
                        
                        this.catchRubbishSound.play();
                        this.diver.rubbishScore += 1;
                        document.querySelector('.rubbishScore').innerText = this.diver.rubbishScore;
                        console.log(document.querySelector('.rubbishScore').innerText);
                        document.querySelector('.percentage').innerText = this.calcProportion(this.diver.rubbishScore, this.diver.deadDwellers)
                    }
            }
        }
    }

    countdown() {
        this.timer -= 0.83;
        this.gameLogic();
        document.querySelector('.timer').innerText = parseFloat(this.timer).toFixed(0);
    }

    gameLogic() {
        let proportion = document.querySelector('.percentage').innerText;
        let rubbishScore = document.querySelector('.rubbishScore').innerText;
        if (this.timer === 0) {
            localStorage.setItem('deadDwellers', this.diver.deadDwellers);
            localStorage.setItem('proportion', proportion);
            localStorage.setItem('rubbishPieces', rubbishScore);
            localStorage.setItem('oxygenLevel', this.timer);
            window.location.href = "./result.html"
        }
        if (this.diver.deadDwellers <= -10 || proportion < 1) {
            console.log('deadfish works');
            localStorage.setItem('deadDwellers', this.diver.deadDwellers);
            localStorage.setItem('proportion', proportion);
            localStorage.setItem('rubbishPieces', rubbishScore);
            localStorage.setItem('oxygenLevel', parseFloat(this.timer).toFixed(0));
            window.location.href = "./result.html"
        }
    }

    draw() {
        //console.log("testdraw")
        clear();
        this.background.draw();
        this.diver.draw(); 
        
        if (frameCount % 100 === 0) {
            this.rubbishPieces.push(new Rubbish(this.rubbishImage));
        }

        this.rubbishPieces.forEach(function (piece) {
            piece.draw();
        })

        if (frameCount % 150 === 0) {
            this.oceanDwellers.push(new OceanDweller(this.oceanDwellerImage));
        }

        this.oceanDwellers.forEach(function (dweller) {
            dweller.draw();
        })

        this.arrows.forEach(function (arrow) {
            arrow.draw();
        })


        this.rubbishPieces = this.rubbishPieces.filter((piece) => {
            if (piece.collect(this.diver) || piece.x < 0) {
                if (piece.x > 0) {this.catchRubbishSound.play();}
                return false;
            } else {
                return true;    
            }
        })

        this.oceanDwellers = this.oceanDwellers.filter((dweller) => {
            if (dweller.catch(this.diver) || dweller.x < 0) {
                if (dweller.x > 0) {this.catchDwellerSound.play();}
                return false;
            } else {
                return true;
            }
        })

        this.filterShots();

        if (this.timer >= -1 && frameCount % 60 === 0) {
            console.log('counting time', this.timer)
            this.countdown();
        }
    }
}