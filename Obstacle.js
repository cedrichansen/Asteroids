

function Obstacle(level) {


    this.x = 0;
    this.y = 0;

    this.speedMultiplier = 1.2;

    this.obstacleXvelocity = 0;
    this.obstacleYvelocity = 0;

    this.Xdiam = 0;


    /*
         0
       ------
     1 |     | 2
       |     |
       -------
         3
     */

    //randomley place obstacles, with random speeds

    this.location = Math.floor(Math.random() * 4);

    if (this.location == 0) {

        this.x = random(0, width);
        this.y = random(-10, 0);

        this.obstacleXvelocity = random(-1 * this.speedMultiplier * level , this.speedMultiplier * level);
        this.obstacleYvelocity = random(1 ,  this.speedMultiplier * level);

    } else if (this.location  == 1) {

        this.x = random(0, -10);
        this.y = random(0, height);

        this.obstacleXvelocity = random(1 , this.speedMultiplier * level );
        this.obstacleYvelocity = random(-1 * this.speedMultiplier * level , this.speedMultiplier * level);

    } else if (this.location == 2) {

        this.x = random(width, width +10);
        this.y = random(0, height);

        this.obstacleXvelocity = random(-1 , -1 * this.speedMultiplier * level);
        this.obstacleYvelocity = random(-1 * this.speedMultiplier * level , this.speedMultiplier * level);

    } else {

        this.x = random(0, width);
        this.y = random(height, height +10);

        this.obstacleXvelocity = random(-1 * this.speedMultiplier * level , this.speedMultiplier * level);
        this.obstacleYvelocity = random(-1 * this.speedMultiplier * level, -1);

    }


    //create obstacles of varying size
    this.diam = random(10, (20 + (2 * level)));



    this.show = function () {

        ellipseMode(CENTER);

        fill(255, 0, 0);
        ellipse(this.x, this.y, this.diam, this.diam);
    }

    this.update = function () {
        this.x += this.obstacleXvelocity;
        this.y += this.obstacleYvelocity;

    }





}











