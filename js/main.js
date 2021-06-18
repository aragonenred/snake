document.addEventListener('DOMContentLoaded', function(){

    const imgGameOver = document.querySelector('#imgGameOver');
    const score = document.querySelector('#score');
    const canvas = document.querySelector('#canvas');
    const btn_up = document.querySelector('#up');
    const btn_down = document.querySelector('#down');
    const btn_left = document.querySelector('#left');
    const btn_right = document.querySelector('#right');
    
    
    backgroundColor = '#959e80';
    snake = new Snake();
    food = new Food();
    game = new Game();


    btn_up.addEventListener('click', function(e){
        console.log('up');
        e.preventDefault();
        up();

    });
    btn_down.addEventListener('click', function(e){
        console.log('down');
        e.preventDefault();
        down();
    });
    btn_left.addEventListener('click', function(e){
        console.log('left');
        e.preventDefault();
        left();
    });
    btn_right.addEventListener('click', function(e){
        console.log('right');
        e.preventDefault();
        right();
    });



    game.start();
   
   
  
    window.addEventListener('keydown', function(e) {
        switch (e.key) {
        case 'ArrowUp':   
            e.preventDefault();
            up();
            break;
        case 'ArrowRight':
            e.preventDefault();
            right();
            break;
        case 'ArrowDown':  
            e.preventDefault();  
            down();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            left();
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
        }  
    });

    function up(){
        /**Valido que el movimiento anterior se haya dibujado */
        if(snake.moved == true){
            snake.vx = 0;
            /**Si no estoy yendo en esa dirección.. */
            if(snake.vy == 0){
                snake.vy = snake.step * (-1);
                snake.moved = false;
            }
        }
    }
    function down(){
        if(snake.moved == true){
            snake.vx = 0;
            if(snake.vy == 0){
                snake.vy = snake.step;
                snake.moved = false;
            }
        }
    }
    function left(){
        if(snake.moved == true){
            snake.vy = 0;
            if(snake.vx == 0){
                snake.vx = snake.step * (-1);
                snake.moved = false;
            }
        }
    }
    function right(){
        if(snake.moved == true){     
            snake.vy = 0;
            if(snake.vx == 0){ 
                snake.vx = snake.step;
                snake.moved = false;
            }
        }
    }





});