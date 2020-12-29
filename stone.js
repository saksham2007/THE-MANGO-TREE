class Stone
{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:2,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r/2,options)
        this.image=loadImage("images/stone.png")
        this.r=r
         World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
       image(this.image,this.body.position.x,this.body.position.y,this.r*2,this.r*2)
       
    }
}