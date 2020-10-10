const balls = [];
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

loop();

function createNewBall(radius, colour, xVelocity, yVelocity) {
  let ball = {
    xPos: randomNumber(0, canvas.width),
    yPos: randomNumber(0, canvas.height),
    radius: radius,
    colour: colour,
    xVel: xVelocity,
    yVel: yVelocity,
  };

  balls.push(ball);
}


function draw() {
  const sAngle = 0;
  const eAngle = 2 * Math.PI;

  balls.forEach((element) => {
    ctx.fillStyle = element.colour;
    ctx.beginPath();
    ctx.arc(
      element.xPos,
      element.yPos,
      element.radius,
      sAngle,
      eAngle
    );
    ctx.closePath();
    ctx.fill();
  });
}


function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  moveBall();
  requestAnimationFrame(loop);
}


function moveBall() {
  balls.forEach((element) => {
    if (
      element.xPos + element.radius > canvas.width ||
      element.xPos - element.radius < 0
    ) {
      element.xVel = -element.xVel;
    }
    if (
      element.yPos + element.radius > canvas.height ||
      element.yPos - element.radius < 0
    ) {
      element.yVel = -element.yVel;
    }

    element.xPos += element.xVel;
    element.yPos += element.yVel;
  });
}


function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

let colour = "red";
let radius = 5;
let xVelocity = 5;
let yVelocity = 6;

createNewBall(radius, colour, xVelocity, yVelocity);
createNewBall(10, "green", xVelocity, yVelocity);


function createANumberOfBalls(amount) {
  for (let i = 0; i < amount; i++) {
    createNewBall(10, "green", xVelocity, yVelocity);
  }
}

createANumberOfBalls(15);