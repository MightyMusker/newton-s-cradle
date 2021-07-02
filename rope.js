class String {
    constructor(a,b){
       
        var option={
            bodyA:a,
            pointB:b,
            stiffness:0.4,
            length:150,
            
          }
          this.pointB=b;
         this.rope=Matter.Constraint.create(option);
          World.add(world,this.rope);
          
    
    }
    display(){
        var posa=this.rope.bodyA.position;
        var posb=this.pointB;
        stroke(255,255,255)
        line(posb.x,posb.y,posa.x,posa.y);
    }
    }
    