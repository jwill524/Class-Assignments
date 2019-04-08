const gravity = 0
let time = 0

class Particle{
    constructor(startX, startY){
        this.X = startX;
        this.Y = startY;
    this.velocity = {x:0, y:0};
    }
getVelocity(){
    return time*gravity;
}

move(){
     this.Y += this.getVelocity();
    if(this.y>=500) console.log('bottom')
}

}
const particles = []
    for(let i = 0; i < 100; i++){
         particles.push(new Particle(i,(Math.random()*500).toFixed(2)));
    }
    console.log(particles)

setInterval(function(){
    time++
    particles
    .filter(function(p){
        console.log(p.x);
        return p.y < 500
    })
    .forEach(function(p){
        p.move();
    });
},100);
























/************************ */
function Particle(startX, startY){
     this.x = startX
     this.Y = startY
     velocity={x:0, y:0}
}

    const particles = []
    for(let i = 0; i < 100; i++){
         particles.push(new Particle(i,Math.random()*500))
    }
    console.log(particles)
/**************************88
 * Inheritance
 */

 
 
