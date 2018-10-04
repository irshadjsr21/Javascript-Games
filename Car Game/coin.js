function coin(x,y){
    this.size = 15;
    this.x = x - (this.size/2);
    this.y = y - (this.size/2);
    
    this.speed = screenMotion;
    this.show = function(){
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x,this.y, this.size, this.size);
    };

    this.update = function(){
        this.x -= this.speed;
    }

    this.hit = function(){
        if((car.x+car.width > this.x && car.x+car.width < this.x + this.size) || (car.x > this.x && car.x < this.x + this.size)){
            if(car.y<this.size+this.y || car.y+car.height > this.y){
                return true
            }
        }
        else
        return false;
    }
}