class Batman{
    constructor(x,y){
        var option = {
            isStatic:true
        }
        this.rain = Bodies.circle(x,y,50,option)
        this.radius = 50
        World.add(world,this.rain)
        this.image = loadImage("images/Walking Frame/walking_1.png")
    }
    display(){
        fill("turquoise")
        imageMode(CENTER)
        image(this.image, this.rain.position.x,this.rain.position.y,300,300)
    }
}