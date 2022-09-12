class MeshRect {
    constructor (x, y, width, height) {

    }
}

class MeshArc {
    x;
    y;
    radius;
    _type = "Arc";
    color = "blue";

    constructor (x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    
    set (x, y, radius) { 
        this.x = x!==null?x:this.x;
        this.y = y!==null?y:this.y;
        this.radius = radius!==null?radius:this.radius; }
}

export {
    MeshArc,
    MeshRect
}