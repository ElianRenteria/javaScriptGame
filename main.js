import {Player} from './player.js';
import {InputHandler} from './input.js';
import {Slime} from './slime.js';


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
            this.enemies = [];
            this.timer = Date.now();
        }
        update(){
            this.player.update(this.Input.keys);
            for (let i = this.enemies.length - 1; i >= 0; i--) {
                const enemy = this.enemies[i];
                enemy.update(this.player);
                if (enemy.x < 0 - enemy.width) {
                    this.enemies.splice(i, 1);
                }
            }
        }
        draw(context){
            context.drawImage(this.background, 0, 0, this.width, this.height);
            this.player.draw(context);
            this.enemies.forEach(function(enemy) {
                try{
                    enemy.draw(context);
                }
                catch(err){}
            });
        }
    }

    const game = new Game(canvas.width, canvas.height);



    function animate(){
        if ((Date.now() - game.timer) > 3000){
            game.enemies.push(new Slime(game));
            game.timer = Date.now();
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
});