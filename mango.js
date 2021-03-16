class Mango  {
    constructor(x, y,r){
      var options={
       restitution:0,
       isStatic:true,
       friction:1
      }
      this.x=x
      this.y=y
      this.r=r
     
      this.image=loadImage("plucking mangoes/mango.png")
      this.body=Bodies.circle(x,y,r,options)
      World.add(world,this.body)
    }
  display(){
    
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
   
    image(this.image,10,10,this.r*2,this.r*2);
    pop();
  }
  };