
function Ship () {

        this.y = height/2;
        this.x = width/2;
        this.diameter = 16;

        this.shipYvelocity = 0;
        this.shipXvelocity = 0;

        this.velocity = 0;

        this.thrustSpeed = 1.5;
        this.decelerationRate = 0;

        this.show = function() {
            fill(255);
            ellipse(this.x, this.y, this.diameter, this.diameter);
        }

        this.blink = function() {

            fill(50,205,50);
            ellipse(this.x, this.y, this.diameter, this.diameter);
        }

        this.update = function () {

            this.velocity = Math.sqrt((this.shipXvelocity * this.shipXvelocity) +
                (this.shipYvelocity * this.shipYvelocity));

            this.decelerationRate = 0.01 * this.velocity;


            if (this.shipXvelocity >0) {
                this.shipXvelocity -= this.decelerationRate;
            } else if (this.shipXvelocity < 0) {
                this.shipXvelocity += this.decelerationRate;
            }
            this.x += this.shipXvelocity;


            if (this.shipYvelocity >0) {
                this.shipYvelocity -= this.decelerationRate;
            } else if (this.shipYvelocity < 0) {
                this.shipYvelocity += this.decelerationRate;
            }

            this.y -= this.shipYvelocity;



            if (this.y > height) {
                this.y = height;
                this.shipYvelocity = 0;
            }

            if (this.y < 0) {
                this.y = 0;
                this.shipYvelocity = 0;
            }

            if (this.x > width) {
                this.x = width;
                this.shipXvelocity = 0;
            }

            if (this.x <0) {
                this.x = 0;
                this.shipXvelocity = 0;
            }

        }


        this.moveUp = function() {
            this.shipYvelocity += this.thrustSpeed;
        }

        this.moveDown = function() {
            this.shipYvelocity -= this.thrustSpeed;

        }

        this.moveRight = function() {
            this.shipXvelocity +=this.thrustSpeed;
        }

        this.moveLeft = function() {
            this.shipXvelocity -= this.thrustSpeed;
        }


}