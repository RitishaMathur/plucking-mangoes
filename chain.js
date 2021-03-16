class Chain{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
           pointB: point2,
            stiffness: 0.004,
            length: 10
        }
        this.chain = Constraint.create(options);
        this.pointB=point2
        World.add(world, this.chain);
    }
    fly(){
        this.chain.bodyA=null
    }
     
    attach(body){
        this.chain.bodyA=body
    }
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
} 