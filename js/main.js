document.addEventListener('DOMContentLoaded', function(){

    const imgGameOver = document.querySelector('#imgGameOver');
    const score = document.querySelector('#score');
    const canvas = document.querySelector('#canvas');
    
    
    backgroundColor = '#959e80';
    snake = new Snake();
    food = new Food();
    game = new Game();

    game.start();
   
  
    window.addEventListener('keydown', function(e) {
        switch (e.key) {
        case 'ArrowUp':   
            e.preventDefault();
            /**Valido que el movimiento anterior se haya dibujado */
            if(snake.moved == true){
                snake.vx = 0;
                /**Si no estoy yendo en esa dirección.. */
                if(snake.vy == 0){
                    snake.vy = snake.step * (-1);
                    snake.moved = false;
                }
            }
            break;
        case 'ArrowRight':
            if(snake.moved == true){     
                snake.vy = 0;
                if(snake.vx == 0){ 
                    snake.vx = snake.step;
                    snake.moved = false;
                }
            }
            break;
        case 'ArrowDown':  
            e.preventDefault();  
            if(snake.moved == true){
                snake.vx = 0;
                if(snake.vy == 0){
                    snake.vy = snake.step;
                    snake.moved = false;
                }
            }
            break;
        case 'ArrowLeft':
            if(snake.moved == true){
                snake.vy = 0;
                if(snake.vx == 0){
                    snake.vx = snake.step * (-1);
                    snake.moved = false;
                }
            }
            break;
        
        case 'p':
            snake.move(false);
            game.status = 'pause';
            console.log('PAUSE');
            break;
            
        case 'Enter':
            if(game.status == 'pause'){
                game.status = 'run';
                snake.move(true);
            }
            break;
        case 'j':
  
            
        
        }  
    });





});