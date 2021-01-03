class Ball {
    constructor(x,y) {
      var options = {
          isStatic:false,
         restitution:1,
          friction:0,
          density:0.8
      }
      this.body = Bodies.circle(x,y,20,options);
      this.image = loadImage("ball.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      image(this.image, this.body.position.x - 25, this.body.position.y, 52, 52);
      pop();
    }
  }
