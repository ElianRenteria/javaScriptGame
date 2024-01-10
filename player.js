export class Player{
    constructor(game){
        this.game = game;
        this.gravity = -24;
        this.jump = false;
        this.count = 1;
        this.attack = false;

        this.facingRight = true;
        this.width = 100;
        this.height = 100;
        this.x = this.game.width / 2-this.width / 2;
        this.y = 485-this.height;
        this.animationFrameX = 0;
        this.animationFrameY = 0;
        this.image = document.getElementById('player'); // Can also just reference the element by id "player" instead of using getElementById also
    }
    update(inputKeys){
        if(inputKeys.includes(' ') && this.attack === false){
            this.attack = true;
            this.animationFrameX = 0;
        }
        if(inputKeys.includes('ArrowUp') && this.jump === false){
            this.jump = true;
            this.animationFrameX = 0;
        }
        if(this.jump ===true && this.gravity < 27){
            this.y += this.gravity;
            this.gravity += 3;
            if (this.gravity === 27){
                this.jump = false;
                this.gravity = -24;
                this.count = 1;
            }
            if (this.gravity % 6 === 0){
                this.count++;
            }
            if(this.attack === false){
                this.animationFrameX = 128*this.count;
            }
        }
        if(inputKeys.includes('ArrowLeft')&&this.x > 0-35){
            this.x -= 5;
            this.animationFrameY = 128*2;
            this.facingRight = false;
            if (this.jump !== true){
                if(this.animationFrameX >= 128*7){
                    this.animationFrameX = 0;
                }
                else{
                    this.animationFrameX += 128;
                }
            }
        }
        if(inputKeys.includes('ArrowRight')&&this.x < this.game.width-this.width+35){
            this.x += 5;
            this.animationFrameY = 128*2;
            this.facingRight = true;
            if (this.jump !== true){
                if(this.animationFrameX >= 128*7){
                    this.animationFrameX = 0;
                }
                else{
                    this.animationFrameX += 128;
                }
            }
        }
        if(this.jump === true && this.attack === false){
            this.animationFrameY = 128;
        }
        if(this.attack === true){
            this.animationFrameY = 128*6;
        }
        if(inputKeys.length === 0 && this.jump !== true && this.attack !== true){
            this.animationFrameY = 0;
            if(this.animationFrameX >= 128*7){
                this.animationFrameX = 0;
            }
            else{
                this.animationFrameX += 128;
            }
        }
        else{
            if(this.animationFrameX >= 128*3){
                this.attack = false;
                this.count = 6;
            }
            else if(this.count % 10  === 0){
                this.animationFrameX += 128;
            }
            else{
                this.count++;
            }
        }
    }

    
    draw(context){
        //context.fillStyle = 'red'; // Reactangle for practice before using images
        //context.fillRect(this.x, this.y, this.width, this.height);
        if (this.facingRight === false){
            context.save();
            context.scale(-1,1);
            context.drawImage(this.image, this.animationFrameX, this.animationFrameY, 128, 128, -this.x-this.width, this.y, this.width, this.height);
            context.restore();
        }
        else{
            context.drawImage(this.image, this.animationFrameX, this.animationFrameY, 128, 128, this.x, this.y, this.width, this.height);
        }
    }
}

