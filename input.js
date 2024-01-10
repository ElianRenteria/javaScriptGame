export class InputHandler{
    constructor(){
        this.keys = [];
        window.addEventListener('keydown', event => {
            console.log(event.key);// check console to see what key is being pressed
            if((event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === ' ') && this.keys.indexOf(event.key) === -1){
                this.keys.push(event.key);
            }
        });
        window.addEventListener('keyup', event => {
            if (event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === ' '){
                this.keys.splice(this.keys.indexOf(event.key), 1);
            }
        });
    }
}