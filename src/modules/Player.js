import { MeshArc } from "./Mesh";
import Pos from "./Position";
import Command from "./Command";

class Player {
    pos;
    mesh;
    handlers = [new PlayerMoveCommand(this.move, this)]

    constructor () {
        this.pos = new Pos(50, 50);
        this.mesh = new MeshArc(0, 0, 25, 25);
    }

    handler () {
        
    }

    move (direction, _self) {
        // console.log(_self.pos)

        switch (direction) {
            case "left": 
                _self.pos.x -= 5;
            break;

            case "right": 
                _self.pos.x += 5;
            break;

            case "up":
                _self.pos.y -= 5;
            break;

            case "down":
                _self.pos.y += 5;
            break;
        }
    }
}

class PlayerMoveCommand extends Command {
    constructor (moveCallback, _self) {
        super();
        this._self = _self;
        this.moveCallback = moveCallback;
    }

    onKeyDown (keys) {
        console.log(keys)
        // console.log(event.keyCode);
        keys.forEach(key => {
            switch (key) {
                case 65:
                    //left
                    this.moveCallback("left", this._self);
                    break;
                case 68:
                    this.moveCallback("right", this._self);
                    break;
                case 87:
                    this.moveCallback("up", this._self);
                    break;
                case 83:
                    this.moveCallback("down", this._self);
                    break;
            }
        });
    }
}

export default Player;