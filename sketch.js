var ship;
//var canvasWidth = 600;
//var canvasHeight = 600;
var upIsHeld, downIsHeld, leftIsHeld, rightIsHeld = false;
var obstacles = [];
var level = 1;
var lives = 3;
var justGotInCollision = false;
var lastHitFrameCount = 0;
var blink = false;
var score = 0;
var highScore = 0;

var levelFrameCount = 0;

var restartGameButton;
var buttonLoaded = false;


function setup() {
    createCanvas(windowWidth - 4, windowHeight - 4);
    ship = new Ship();
    obstacles.push(new Obstacle(level));

}

function draw() {

    background(0);

    for (i = 0; i < obstacles.length; i++) {
        obstacles[i].update();
        obstacles[i].show();

        if (!justGotInCollision && collideCircleCircle(ship.x, ship.y, ship.diameter + 16, obstacles[i].x, obstacles[i].y, obstacles[i].Xdiam)) {
            console.log("lives left:" + --lives);
            justGotInCollision = true;
            lastHitFrameCount = frameCount;
        }
    }

    ship.update();


    if (frameCount % 5 === 0) {
        checkHeldKeys();
    }

    if (frameCount % Math.floor(100 / (2 * level)) == 0) {
        obstacles.push(new Obstacle(level));
        score++;
    }

    if (justGotInCollision) {

        if (lives == 0) {
            ship.blink();
            restartGameButton = createButton("Restart Game?");
            restartGameButton.mousePressed(restartGame);
            restartGameButton.position(windowWidth / 2 - 30, windowHeight / 2);
            buttonLoaded = true;
            noLoop();
        }

        //wait 100 frames until ship can lose another life
        if (frameCount - lastHitFrameCount > 150) {
            justGotInCollision = false;
            console.log("can now get hit again");
        }

        if (blink) {
            ship.blink();
            blink = false;
        } else {
            blink = true;
        }


    } else {
        ship.show();
    }


    if (frameCount - levelFrameCount > 1000) {

        levelFrameCount = frameCount;
        level++;
        obstacles = [];


    }


    textSize(32);
    text("Lives: " + lives, 10, 30);

    textSize(32);
    text("Score: " + score, windowWidth - 300, 30);

    textSize(32);
    text("HighScore: " + highScore, windowWidth - 300, windowHeight-60);

    textSize(32);
    text("Level: " + level, 10,windowHeight-60);

}


function restartGame() {
    if (score > highScore) {
        highScore = score;
    }
    obstacles = [];
    lives = 3;
    score = 0;
    lastHitFrameCount = 0;
    justGotInCollision = false;
    blink = false;
    ship = new Ship();
    restartGameButton.remove();
    buttonLoaded = false;
    level = 1;
    loop();
}


/*
   when a key is pressed/held, accelerate in that particular direction
 */

function keyPressed() {

    if (key === 'd' || keyCode === RIGHT_ARROW) {

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
function keyReleased() {

    if (key === 'd' || keyCode === RIGHT_ARROW) {

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