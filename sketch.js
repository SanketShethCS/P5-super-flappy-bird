
var bird;

var pipes=[];

var game=false;

var stop=false;

var score =0;

var count=1;

function preload(){
    img = loadImage('images/superbird.jpeg');
}

function setup() {
    createCanvas(400,600);
    bird=new Bird();
    p=new Pipe();
    pipes.push(p);
}

function draw() {
    

    if (game==false){
        background(0);    
    
    for(var i=pipes.length-1; i >= 0; i--){
        pipes[i].show();
        if (stop==false){
        pipes[i].update();
        }
        if (pipes[i].offscreen())
        {
            score=score+1;
            pipes.splice(i,1);
        }
        if(pipes[i].hits(bird)){
            stop=true;
            game=true;
        
        }
        
    }
    fill(255,0,0);
    textSize(25);    
    text("Score = "+score,270,50);
    
       
    bird.show(); 
    if(stop==false){
    bird.update();
    }
        
        
    if(frameCount % 100 ==0 ){
        pipes.push(new Pipe());
    }
        
    }
    else if(game ==true ){
        for(var i=0;i<150000000;i++){
            count=count+1;
        }
        background(0);
        fill(51,51,255);
        textSize(50);
        text("GAME OVER!", 50, 200);
        text("Score = "+score,50,300);   
    }
    
}

function keyPressed(){
    if(key=' '){
        bird.up();
    }
}