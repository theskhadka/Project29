class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          restitution: 0.8
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color);
      rect(pos.x, pos.y, this.width, this.height);
    }
}
