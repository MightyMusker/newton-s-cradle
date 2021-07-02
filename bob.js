class Bob{

    constructor(x,y,radius) {
        var option={
            isStatic:true
        }
        this.body =  Bodies.circle(x,y,radius); 
        this.width = radius;
        this.height = radius;
        
        World.add(world, this.body);  
    }
    

    display(){

        var pos = this.body.position;

        ellipseMode(CENTER);
        fill("brown");
        ellipse(pos.x,pos.y,this.width,this.height);

    }

}