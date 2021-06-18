var ctx = canvas.getContext('2d');    
function Snake() {
    this.x = [20,20,20];
    this.y = [0,10,20];
    this.w = 10;
    this.h = 10;
    this.vx = 0;
    this.vy = 10;
    this.step = 10;
    this.color = '#000000';
    this.moved;
    
    this.draw = function() {
        ctx.fillStyle = this.color;
        for(i=0; i<this.y.length; i++){
            ctx.lineWidth = 0.5;
            ctx.strokeRect(this.x[i]+1, this.y[i]+1, this.w-2, this.h-2);
            ctx.clearRect(this.x[i]+1, this.y[i]+1, this.w-2, this.h-2);
            ctx.fillRect(this.x[i]+2.5, this.y[i]+2.5, this.w/2, this.h/2);
        }
        this.moved = true; 
    }
 
    this.move = function(move){  
        if(move){
            onMove = setInterval(() => {
                ctx.fillStyle = backgroundColor; 
                 /**Si estoy en la misma posicion que food sumo un cubo en la direccion que se presionó (arriba, abajo, etc) */
                if(checkEat(this.x[this.x.length -1], this.y[this.x.length -1])){
                    this.x.push(food.x + this.vx);
                    this.y.push(food.y + this.vy);
                    food.draw();
                }
                for(i=0; i < this.y.length; i++){ 
                    /**Muevo la cabeza. El primer cubo de la derecha */
                    if(i == this.y.length -1){
                        
                        ctx.fillRect(this.x[i], this.y[i], this.w ,this.h);
                        this.x[i] += this.vx;
                        this.y[i] += this.vy;

                        /**Si me pase de alguno de los bordes detengo el movimiento */
                        this.checkCollision(this.x[i], this.y[i]);
                    }else{
                        /**Muevo el cuerpo. Muevo el cubo actual a la posicion del siguiente: */
                        ctx.fillRect(this.x[i], this.y[i], this.w ,this.h);
                        this.x[i] = this.x[i + 1];
                        this.y[i] = this.y[i + 1];
                    }
                }
                
                this.draw();     
            }, 100);  
        }else{
            clearInterval(onMove);
        }     
    }

    this.checkCollision = function (x, y) {
        /**Valido si se salio del campo de juego: */
        if(x == canvas.width  || x < 0 || y == canvas.height || y < 0){
            game.gameOver(0);
            clearInterval(onMove);
            game.status = 'stop';
        }
        /**Valido si el cubo de la cabeza esta en la misma posicion que el cuerpo: */
        for(i=0; i< this.x.length -1; i++){
            if(this.x[i] == x && this.y[i] == y){
                game.gameOver(1);
                clearInterval(onMove);
                game.status = 'stop';
            }
        }  
    }
}

function checkEat(x, y){
    if(x == food.x && y == food.y){ 
        game.scoreCalc();  
        return true;
    }
}