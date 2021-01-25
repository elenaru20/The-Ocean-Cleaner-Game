class Background {
    draw() {
       console.log("This is the background")
       //game.backgroundImages.forEach(function (img) {
       // img.x -= img.speed;   
        image(game.backgroundImageFixed1, 0, 0, width, height);
        image(game.backgroundImageFixed2, 120, 55, 400, 350);

        game.backgroundMovingImages.forEach(function (img) {
            img.x -= img.speed;
            image(img.src, img.x, 0, width, height);
            image(img.src, img.x + width, 0, width, height)
            if (img.x <= - width) {
                img.x = 0;
            }
        })
        
    
    }

}