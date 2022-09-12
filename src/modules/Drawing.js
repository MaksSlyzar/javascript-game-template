import Command from "./Command";

class Drawing {
    canvas;
    ctx;

    handlers = [new WindowResizeCommand(this.onWindowResize, this)];

    constructor (canvas) { this.setCanvas(canvas); };

    setCanvas (canvas) { 
        this.canvas = canvas; this.ctx = canvas.getContext("2d");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    onWindowResize (evt, _self) {
        console.log("Resize window")
        _self.canvas.width = window.innerWidth;
        _self.canvas.height = window.innerHeight;
    }

    update (objects) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let objId in objects) {
            const object = objects[objId];
            
            switch (object.mesh._type) {
                case "Rect":
                    this.ctx.fillRect(object.pos.x, object.pos.y, object.mesh.width, object.mesh.height);
                break;
                
                case "Arc":
                    this.ctx.beginPath();
                    this.ctx.arc(object.pos.x, object.pos.y, object.mesh.radius, 0, 2 * Math.PI);
                    this.ctx.stroke();
                break;
            }
        }
    }
}

class WindowResizeCommand extends Command {
    resizeCallBack;
    _self;

    constructor (resizeCallBack, _self) {
        super();
        this.resizeCallBack = resizeCallBack;
        this._self = _self;
    }
    
    onWindowResize (evt) {
        this.resizeCallBack(evt, this._self);
    }
}

export default Drawing;