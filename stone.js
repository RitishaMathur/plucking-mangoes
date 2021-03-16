class Stone{
    constructor(x,y,r){
    var options={
    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2
    }
    
    this.body = Bodies.circle(x, y,30, options);
        
        this.r=r;
        World.add(world, this.body);
        this.stone = loadImage("plucking mangoes/stone.png");
  }
  display(){
    var angle = this.body.angle;
    var pos = this.body.position
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.stone,0,0,60,60);
        pop();;
  }
}