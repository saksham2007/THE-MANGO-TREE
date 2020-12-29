class Tree
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height

this.image=loadImage("images/tree.png")
this.body=Bodies.rectangle(this.x,this.y,this.width/20,this.height/20,options)
World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,545,450,500,500)
    }
}