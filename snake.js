function Snake(){
  this.x = [0];
  this.y = [0];
  this.speed = 1;
  this.speedx = this.speed;
  this.speedy = 0;
  this.len = 1;
  
  this.update = function(){
    tempx = this.x[this.len - 1];
    tempy = this.y[this.len - 1];
    for(i = this.len - 1; i > 0; i--){
      this.x[i] = this.x[i-1];
      this.y[i] = this.y[i-1];
    }
    this.x[0] += snake.speedx*board_res;
    this.y[0] += snake.speedy*board_res;
    if(this.eat()){
      this.x.push(tempx);
      this.y.push(tempy);
      this.len++;
      document.getElementById("score").innerHTML = "Current Score: " + (this.len - 1);
      food.setNewLocation();
    }
    if(this.die()){
      endGame();
    }
  }
  
  this.draw = function(){
    fill(255);
    stroke(1);
    for(i = 0; i<this.len; i++){
      rect(this.x[i], this.y[i], board_res, board_res);
    }
  }
  
  this.eat = function(){
    if((this.x[0] + board_res/2) > food.x && (this.x[0] + board_res/2) <  (food.x + board_res) && (this.y[0] + board_res/2) > food.y && (this.y[0] + board_res/2) <  (food.y + board_res)){
      return true;
    }
  }
  
  this.die = function(){
    if(this.x[0] > width || this.x[0] < 0 || this.y[0] > height || this.y[0] < 0){
      return true;
    }
    for(i = 1; i < this.len; i++){
      if((this.x[0] + board_res/2) > this.x[i] && (this.x[0] + board_res/2) <  (this.x[i] + board_res) && (this.y[0] + board_res/2) > this.y[i] && (this.y[0] + board_res/2) <  (this.y[i]+ board_res)){
        return true;
      }
    }
  }
  
  this.move = function(key){
    if(frameCount === fcount){}
    else{
      fcount = frameCount;
      if(key == DOWN_ARROW && this.speedy === 0){
        this.speedy = this.speed;
        this.speedx = 0;
      }
      if(key == UP_ARROW && this.speedy === 0){
        this.speedy = -this.speed;
        this.speedx = 0;
      }
      if(key == LEFT_ARROW && this.speedx === 0){
        this.speedy = 0;
        this.speedx = -this.speed;
      }
      if(key == RIGHT_ARROW && this.speedx === 0){
        this.speedy = 0;
        this.speedx = this.speed;
      }
    }
  }
}

