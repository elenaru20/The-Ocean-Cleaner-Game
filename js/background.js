class Background {

    draw() {
       // console.log("This is the background")
        //fixed background sun and horizon
        image(game.backgroundImageFixed1, 0, 0, width, height);
        //fixed ship as a background
        image(game.backgroundImageFixed2, 120, 60, 600, 550);
        //fixed waves
        image(game.backgroundImageFixed3, 0, 0, width, height);

        //moving waved with different speed
        game.backgroundMovingImages.forEach(function (img) {
            //from right to left
            img.x -= img.speed;
            //setting images
            image(img.src, img.x, 0, width, height);
            //when running off the window, directly add a new one following
            image(img.src, img.x + width, 0, width, height)
            //when iamge left screen, set it back to the starting position
            if (img.x <= - width) {
                img.x = 0;
            }
        })
        
    
    }

}