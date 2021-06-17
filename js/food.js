var ctx = canvas.getContext('2d');
function Food(){

    this.x = 0;
    this.y = 0;
    this.w = 10;
    this.h = 10;
    

    this.draw = function(){
    this.x = random(0, canvas.width - this.w);
    this.y = random(0, canvas.height - this.h);
   
    for(i=0; i<snake.x.length; i++){
        if(snake.x[i] == food.x && snake.y[i] == food.y){
            this.x = random(0, canvas.width - this.w);
            this.y = random(0, canvas.height - this.h);
        }
    }

    ctx.fillStyle='green';

    ctx.strokeRect(this.x+1, this.y+1, this.w-2, this.h-2);
    ctx.clearRect(this.x+1, this.y+1, this.w-2, this.h-2);
    ctx.fillRect(this.x+2.5, this.y+2.5, this.w/2, this.h/2);
    ctx.fillStyle=backgroundColor;
    console.log('x: ' + this.x + ' y:' + this.y);
  }
    
}

function random(min, max) {
    do {
        num = (Math.random() * (max - min)) + min
        num = Math.round(num);       
    } while (!(num % 10) == 0);

    
    return num;
}