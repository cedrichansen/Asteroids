
function Ship () {

        this.y = height/2;
        this.x = width/2;
        this.diameter = 16;

        this.Yvelocity = 0;
        this.Xvelocity = 0;

        this.velocity = 0;

        this.thrustSpeed = 2;
        this.decelerationRate = 0;

        this.show = function() {
            fill(255);
            ellipse(this.x, this.y, this.diameter, this.diameter);
        }

        this.update = function () {

            this.velocity = Math.sqrt((this.Xvelocity * this.Xvelocity) +
                (this.Yvelocity * this.Yvelocity));

            this.decelerationRate = 0.01 * this.velocity;


            if (this.Xvelocity >0) {
                this.Xvelocity -= this.decelerationRate;
            } else if (this.Xvelocity < 0) {
                this.Xvelocity += this.decelerationRate;
            }
            this.x += this.Xvelocity;


            if (this.Yvelocity >0) {
                this.Yvelocity -= this.decelerationRate;
            } else if (this.Yvelocity < 0) {
                this.Yvelocity += this.decelerationRate;
            }

            this.y -= this.Yvelocity;



            if (this.y > height) {
                this.y = 0;
            }

            if (this.y < 0) {
                this.y = height;
            }

            if (this.x > width) {
                this.x = 0;
            }

            if (this.x <0) {
                this.x = width;
            }

        }


        this.moveUp = function() {
            this.Yvelocity += this.thrustSpeed;
        }

        this.moveDown = function() {
            this.Yvelocity -= this.thrustSpeed;

        }

        this.moveRight = function() {
            this.Xvelocity +=this.thrustSpeed;
        }

        this.moveLeft = function() {
            this.Xvelocity -= this.thrustSpeed;
        }


}