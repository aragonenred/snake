var ctx = canvas.getContext('2d');
function Game(){

    this.gameScore = 0;
    this.level = 1;
    this.status; //run, pause, stop
    
    this.start = function start() {
        this.gameScore = 0;
        this.level = 1;
            this.status = 'run';
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0,0,canvas.width, canvas.height);
        
        snake.draw();
        snake.move(true);
        food.draw();
    }

    this.gameOver = function (id){
        snake.move(false);
        console.log('Game Over: Fuera del Campo');
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.font = '15px lobter';
        ctx.fillText('Con F5 volvés a jugar', canvas.width/2, canvas.height/1.5);
        mensajeGameOver(id);
    }

    this.scoreCalc = function(){
        this.gameScore = this.gameScore + (50 * this.level); 
        this.level ++; 
        score.innerHTML = this.gameScore;
    }
}

function mensajeGameOver(id){
    if (id == 0){
        imgGameOver.setAttribute('src', 'img/GameOver/end_1.png');
        imgGameOver.classList.remove('ocultar');
        imgGameOver.classList.add('mostrar');
    }else if(id == 1){
        imgGameOver.setAttribute('src', 'img/GameOver/end_2.png');
        imgGameOver.classList.remove('ocultar');
        imgGameOver.classList.add('mostrar');
    }
 

}
 







