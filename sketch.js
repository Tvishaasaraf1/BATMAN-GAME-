const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var drops = []
function preload(){
thunder1  = loadImage("images/thunderbolt/1.png")
thunder2  = loadImage("images/thunderbolt/2.png")
thunder3  = loadImage("images/thunderbolt/3.png")
thunder4  = loadImage("images/thunderbolt/4.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    if(frameCount%150===0){
        for(var i = 0;i<100;i++){
            drops.push(new createDrop(random(0,400),random(0,400)))
        }
    }
    batman = new Batman(200,500)
}

function draw(){
    Engine.update(engine);
    background(0);

    for(var i=0;i<100;i++){
        drops[i].display()
        drops[i].updateY()
    }
    if(frameCount%80===0){
        thunder = createSprite(random(10,370),random(10,30))
        switch(Math.round(random(1,4))){
            case 1: thunder.addImage(thunder1)
            break
            case 2: thunder.addImage(thunder2)
            break
            case 3: thunder.addImage(thunder3)
            break
            case 4: thunder.addImage(thunder4)
            break
            
        }
        thunder.scale = random(0.3,0.6)
        thunder.lifetime  = 30
    }
    batman.display()
    drawSprites()
}   

