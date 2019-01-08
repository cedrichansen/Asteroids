var ship;
var canvasWidth = 600;
var canvasHeight = 600;
var upIsHeld, downIsHeld, leftIsHeld, rightIsHeld = false;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    ship = new Ship();
}

function draw() {

    background(0);

    ship.update();
    ship.show();
    if (frameCount % 5 === 0) {
        checkHeldKeys();
    }
}


/*
   when a key is pressed/held, accelerate in that particular direction
 */

function keyPressed() {

    if (key === 'd' || keyCode === RIGHT_ARROW ) {

        ship.moveRight();
        rightIsHeld = true;

    } else if (key === 'w' || keyCode === UP_ARROW) {

        ship.moveUp();
        upIsHeld = true;

    } else if (key === 's' || keyCode === DOWN_ARROW) {

        ship.moveDown();
        downIsHeld = true;

    } else if (key === 'a' || keyCode === LEFT_ARROW) {

        ship.moveLeft();
        leftIsHeld = true;
    }

}

/*
    When a key is realeased, stop accelerating in the particular direction
 */
function keyReleased(){

    if (key === 'd' || keyCode === RIGHT_ARROW ) {

         rightIsHeld = false;

    } else if (key === 'w' || keyCode === UP_ARROW) {

        upIsHeld = false;

    } else if (key === 's' || keyCode === DOWN_ARROW) {

        downIsHeld = false;

    } else if (key === 'a' || keyCode === LEFT_ARROW) {

        leftIsHeld = false;

    }
}


/*
    check the keys that are currently being held, and accelerate in appropriate direction
 */
function checkHeldKeys() {

       if (downIsHeld) {
           ship.moveDown();
       }
       if (upIsHeld) {
           ship.moveUp();
       }
       if (rightIsHeld) {
           ship.moveRight();
       }
       if (leftIsHeld) {
           ship.moveLeft();
       }

}