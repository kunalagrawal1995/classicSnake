var snake;
var board_res = 10;
var food;
var i, tempx, tempy;
var fcount = 0;

//game control variables
var gameOn = false;

function setup() {
  var cnv = createCanvas(400, 400);
  cnv.parent("myContainer");
  frameRate(10);
  snake = new Snake();
  food = new Food();
  food.setNewLocation();
}

function draw() {
  background(0);
  if(gameOn){
    snake.update();
    snake.draw();
    food.draw();
  }
}

function keyPressed(){
  snake.move(keyCode);
}

function startGame(){
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("score").innerHTML = "Current Score: 0";
  gameOn = true;
  snake = new Snake();
  food = new Food();
  food.setNewLocation();
}

function endGame(){
  document.getElementById("start").style.visibility = "visible";
  document.getElementById("score").innerHTML = "Game Over! Final Score: " + (snake.len - 1);
  gameOn = false;
}


