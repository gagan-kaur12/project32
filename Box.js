class Box  {
  constructor(x, y, width, height) {
    var options = {
       
        'restitution' :0.4,
        'friction' :0.5,
        'density':1.2,
        'isStatic': false

        //isStatic:true
       
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world, this.body);
  }

  score(){
    if(this.Visibility < 0 && this.Visibility > -1005){
        score = score + 1;      
        
    }
}
  display(){
    
    if (this.body.speed < 5) {
      var pos = this.body.position;
    var angle = this.body.angle;
    push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    } else {
       
        World.remove(world, this.body);
        push();
        tint(255, this.Visibility);
        this.Visibility = this.Visibility-5;
        tint(255, this.Visibility);
       // rect(0,0,this.width,this.height);
       pop();

      
    }
  }
   
}
