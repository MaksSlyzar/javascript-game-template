 class InputHandler {
    constructor () {
        this.handling();
    }

    handlers = [];
    keys = [];

    handling () {
        window.addEventListener("keydown", (evt) => this.onKeyDown(evt), false);
        window.addEventListener("keyup", (evt) => this.onKeyUp(evt), false); 
        window.addEventListener("resize", (evt) => this.onWindowResize(evt), false);
    }

    onWindowResize (evt) {
        this.handlers.forEach(handler => {
            handler.onWindowResize(evt);
        });
    }

    onKeyDown (evt) {
        this.keys = [];
        this.keys.push(evt.keyCode);
    }

    onKeyUp (evt) {
        for (let keyIndex in this.keys) {
            const key = this.keys[keyIndex];

            if (key == event.keyCode) {
                this.keys.splice(keyIndex, 1);
            }
        }
    }

    update () {
        if (this.keys.length == 0) return;
        this.handlers.forEach(handler => {
            handler.onKeyDown(this.keys);
        });
    }

    onClick () {

    }

    addHandlers (...handlers) { this.handlers.push(...handlers); }
}

export default InputHandler;