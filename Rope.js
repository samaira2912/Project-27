class RopeClass {

    constructor(body1,pointB){
        
        var option = 
        {
            bodyA:body1,
            pointB:pointB,
            'stiffness':0.08
        }
        this.pointB = pointB
        this.rope = Constraint.create(option)
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        strokeWeight(2);
        stroke("white");

        
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}