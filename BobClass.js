class BobClass{
    
    constructor(x, y,radius) {
        var options = {
            'isStatic':false,
            'restitution':1,
            'friction':0.2,
            'density':1
        }
     this.body = Bodies.circle(x, y, radius,options);
     this.radius = radius;
        World.add(world, this.body);
      }
    display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    fill("teal");
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();
    }
}