class Paper {
    constructor(x, y,r) {
      var options = {
          'restitution':0.08,
          'friction':1,
          'density':1.0,
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("pink");
      strokeWeight(2);
      stroke("purple");
     imageMode(CENTER)
     image(this.image,0,0,this.r,this.r);   
   pop();
    }

  };