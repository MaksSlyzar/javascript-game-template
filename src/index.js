import Drawing from "./modules/Drawing";
import InputHandler from "./modules/InputHandler";
import Player from "./modules/Player";

import "./css/main.scss";

class Game {
    drawing;
    player;
    inputHandler;

    constructor (canvas) {
        this.drawing = new Drawing(canvas);
        this.player = new Player();
        this.inputHandler = new InputHandler();
        this.inputHandler.addHandlers(...this.player.handlers, ...this.drawing.handlers);

        this.inputHandler.handling();
        this.update();
    }

    update () {
        this.drawing.update([this.player]);
        this.inputHandler.update();

        requestAnimationFrame(() => this.update());
    }
}

const game = new Game(canvas);