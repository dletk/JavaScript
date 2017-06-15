/**
 * Created by DucLe on 4/4/17.
 */
// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function Ball() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.velX = random(-7, 7);
    this.velY = random(-7, 7);
    this.color = "rgb("+random(0, 255)+","+random(0,255)+","+random(0,255)+")";
    this.size = random(10, 20);
}

Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
    ctx.fill();
};

Ball.prototype.collideDetect = function () {
    var centerX = this.x + this.size/2;
    var centerY = this.y + this.size/2;
    for (var i = 0; i < balls.length; i++) {
        if (balls[i] !== this) {
            var centerXother = balls[i].x + balls[i].size/2;
            var centerYother = balls[i].y + balls[i].size/2;
            var distance = Math.sqrt(Math.pow(centerX-centerXother, 2)+Math.pow(centerY-centerYother,2));
            if (distance <= this.size/2 + balls[i].size/2) {
                // this.velX += balls[i].velX;
                // this.velY += balls[i].velY;
                this.color = "rgb("+random(0, 255)+","+random(0,255)+","+random(0,255)+")";
            }
        }
    }
};



Ball.prototype.update = function () {
    if (this.x + this.size > width || this.x < 0) {
        this.velX *= -1;
    }
    if (this.y + this.size > height || this.y < 0) {
        this.velY *= -1;
    }
    this.x += this.velX;
    this.y += this.velY;
};

var balls = [];

loopAndUpdate();

function loopAndUpdate() {
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, width, height);

    while (balls.length < 25) {
        var aBall = new Ball();
        balls.push(aBall);
    }

    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collideDetect();
    }

    requestAnimationFrame(loopAndUpdate);
}