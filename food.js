function Food(){
  this.x = 0;
  this.y = 0;
  this.draw = function(){
    fill(255,0,0);
    noStroke();
    rect(this.x, this.y, board_res, board_res);
  }
  
  this.setNewLocation = function(){
    var r = floor(width/board_res);
    var c = floor(height/board_res);
    var found = true;
    while(1){
      found = true;
      this.x = (floor(random(0,r)))*board_res;
      this.y = (floor(random(0,c)))*board_res;
      for(i = 0; i<snake.len; i++){
        if((snake.x[i] + board_res/2) > this.x && (snake.x[i] + board_res/2) <  (this.x + board_res) && (snake.y[i] + board_res/2) > this.y && (snake.y[i] + board_res/2) <  (this.y + board_res)){
          found = false;
          break;
        }
      }
      if(!found){
        continue;
      }
      else{
        break;
      }
    }
  }
}