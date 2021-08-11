class createDrop{
    constructor(x,y){
        var option = {
            friction:0.1,
            restitution:0.1
        }
        this.rain = Bodies.circle(x,y,5,option)
        this.radius = 5 
        World.add(world,this.rain)
    }
    display(){
        fill("turquoise")
        ellipseMode(CENTER)
        ellipse(this.rain.position.x,this.rain.position.y,this.radius)
    }
    updateY(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
    
}