import {Player} from './player.js';
import {InputHandler} from './input.js';


window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1200;
    canvas.height = 500;

    class Game{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.Input = new InputHandler();
            this.background = document.getElementById('background');
        }
        update(){
            this.player.update(this.Input.keys);
        }
        draw(context){
            context.drawImage(this.background, 0, 0, this.width, this.height);
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    console.log(game);



    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});