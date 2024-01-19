
class Platform{
    constructor(game){
        this.game = game;

        this.width = 100;
        this.height = 100;
        this.x = this.game.width / 2-this.width / 2;
        this.y = 485-this.height;
        this.image = document.getElementById('player'); // Can also just reference the element by id "player" instead of using getElementById also
    }


}