class slingshot{
    constructor(bodyA,bodyB){
        var options={
bodyA:bodyA,
bodyB:bodyB,
length:10,
stiffness:0.04
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        var pointa=this.sling.bodyA.position;
        var pointb=this.sling.bodyB.position;
        strokeWeight(4);
        line(pointa.x,pointa.y,pointb.x,pointb.y)
    }

}