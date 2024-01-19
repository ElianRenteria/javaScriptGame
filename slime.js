export class Slime {
    constructor(game) {
        this.game = game;
        this.gravity = -24;
        this.jump = false;
        this.count = 1;
        this.attack = false;

        this.facingRight = true;
        this.width = 100;
        this.height = 100;
        this.x = 1200 - (this.width / 2);
        this.y = 485 - this.height;
        this.animationFrameX = 0;
        this.animationFrameY = 0;
        this.image = document.getElementById('greenSlime');
        this.maxHealth = 100;
        this.health = 100; // Set initial health
    }

    update(player) {
        this.x -= 1;
        this.animationFrameX += 128;
        if (this.animationFrameX >= 128 * 7) {
            this.animationFrameX = 0;
        }
        if(player.x.attack === true){
            if (player.x < this.x + this.width && player.x > this.x && player.y < this.y + this.height && player.y > this.y){
                this.health -= 1;
            }    
        }
        // Add logic to handle health changes (e.g., when attacked)
        // Example: this.health -= damageAmount;
    }

    draw(context) {
        // Draw the slime
        context.drawImage(this.image, this.animationFrameX, this.animationFrameY, 128, 128, this.x, this.y, this.width, this.height);

        // Draw health bar
        context.fillStyle = 'black'; // Health bar color
        context.fillRect(this.x+26, this.y+58, 50, 5); // Health bar background

        const healthBarWidth = (this.health / this.maxHealth) * 50;
        context.fillStyle = 'red'; // Health bar color
        context.fillRect(this.x+26, this.y+58, healthBarWidth, 5); // Health bar
    }
}
