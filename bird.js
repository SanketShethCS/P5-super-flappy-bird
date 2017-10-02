

function Bird(){
    this.y=height/2;
    this.x=64;
    this.gravity=0.8;
    this.lift=-17;
    this.velocity=0;
    this.show=function(){
            image(img,this.x,this.y,img.width/6,img.height/6);
            //fill(255);
            //ellipse(this.x,this.y,24,24)
    }
    this.update=function(){
        this.velocity=this.velocity+this.gravity;
        this.velocity *= 0.9
        this.y=this.y+this.velocity;
        
        if (this.y > height){
            this.y=height;
            this.velocity=0;
            game=true;
        }
        
        if (this.y <= 0){
            this.y=0;
            this.velocity=0;
            game=true;
        }
        
    }
    
    this.up= function(){
        this.velocity += this.lift;
    }
    
}