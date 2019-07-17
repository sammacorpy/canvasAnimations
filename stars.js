var canvas=document.getElementById("base");
var canvas1 = document.getElementById("mycanvas");
var canvas2=document.getElementById("mycanvas2");
var canvas3=document.getElementById("mycanvas3");
var canvas4=document.getElementById("mycanvas4");





canvas.width=window.innerWidth;
canvas.height=window.innerHeight-1;

canvas1.width=window.innerWidth;
canvas1.height=window.innerHeight-1;

canvas2.width=window.innerWidth;
canvas2.height=window.innerHeight-1;


canvas3.width=window.innerWidth;
canvas3.height=window.innerHeight-1;

canvas4.width=window.innerWidth;
canvas4.height=window.innerHeight-1;


var c= canvas.getContext('2d');
var c1= canvas1.getContext('2d');
var c2=canvas2.getContext('2d');
var c3=canvas3.getContext('2d');
var c4=canvas4.getContext('2d');



var resizableradius=innerWidth/9;

window.addEventListener('resize', function() {
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight-1;

        canvas1.width=window.innerWidth;
        canvas1.height=window.innerHeight-1;

        canvas2.width=window.innerWidth;
        canvas2.height=window.innerHeight-1;


        canvas3.width=window.innerWidth;
        canvas3.height=window.innerHeight-1;

        canvas4.width=window.innerWidth;
        canvas4.height=window.innerHeight-1;
        resizableradius=innerWidth/9;

       
    init();
    
 
});






var mouse={
    x:undefined,y:undefined
}




function Circle(x,y,radius,dx,dy){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;

    var rad=this.radius;
    var irArray=[0.001,0.003,0.005,0.004,0.002,0.0025];
    var ir=irArray[Math.floor(Math.random()*irArray.length)];

    var alp=0.5+Math.random();
    var dec=irArray[Math.floor(Math.random()*irArray.length)];
    var vaalp=0.5;
    this.draw= function(){
        c.beginPath(); 
        c.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
        vaalp-=dec;
        c.fillStyle="rgba(255,255,255,"+vaalp+")";
        if (vaalp<=0.1 || vaalp>alp){
            dec=-dec;
        }
        c.fill();

        
        
        
    }
    
    this.update=function(){
        
        this.draw();
        this.x+=this.dx;
        this.y+=this.dy;
        if (this.radius<=1 || this.radius>rad){
        ir=-ir;
         }
        
        this.radius-=ir;
        

        if (this.x+this.radius>innerWidth || this.x-this.radius<0){
            this.dx=-this.dx;
        }
        if (this.y+this.radius>innerHeight || this.y-this.radius<0){
            this.dy=-this.dy;
        }

        }
}



var circleArray=[];
function init(){

circleArray=[];


for(var i=0;i<400;i++){
    var radius=Math.random()*2+0.5;
    var x=Math.random()*(innerWidth-radius*2)+radius;
    var y=Math.random()*(innerHeight-radius*2)+radius;
    var dx=(Math.random()-0.5)*0.5;
    var dy=(Math.random()-0.5)*0.5;
    
    circleArray.push(new Circle(x,y,radius,dx,dy));
}

}
init();

window.addEventListener('click',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    for(var i=0;i<Math.floor(Math.random()*3)+5;i++){
        var r=Math.random()*2+0.5;
        var dx=(Math.random()-0.5)*0.5;
        var dy=(Math.random()-0.5)*0.5;

        circleArray.push(new Circle(mouse.x,mouse.y,r,dx,dy))
    }

})


function make_base()
{
  base_image = new Image();
  base_image1 = new Image();
  base_image2= new Image();
  base_image3= new Image();
  base_image.src = 'logo1.png';
  base_image1.src = 'logo2.png';
  base_image2.src = 'logo3.png';
  base_image3.src = 'logo4.png';
  base_image.onload = function(){
    

   


  }
}
make_base();
deg=Math.PI/180;



var angdx=0;
var nangdx=0;
var smangdx=0;
c.lineWidth=1.5
function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth,innerHeight);

    
    

    if (circleArray.length>400){
    while (circleArray.length>500){
        
        circleArray.shift();
    }
    
}
    for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }


}

animate();


var a=0;
var b=0;
var e=0;
var d=0;


function animate1(){
    requestAnimationFrame(animate1);
    c1.clearRect(0,0,innerWidth,innerHeight);
    c1.save();
    c1.translate(innerWidth/2,(innerHeight-1)/2);
    c1.rotate(a*deg);   
    c1.drawImage(base_image,-resizableradius-75,-resizableradius-75,2*resizableradius+150,2*resizableradius+150);
    
    c1.restore();
    


    if (a>=360){
        a=0
    }
    a+=1;
    
    

    
    
    

}

animate1();

function animate2(){
    requestAnimationFrame(animate2);
    c2.clearRect(0,0,innerWidth,innerHeight);
    c2.save();
    c2.translate(innerWidth/2,(innerHeight-1)/2);
    c2.rotate(b*deg);   
    c2.drawImage(base_image1,-resizableradius-75,-resizableradius-75,2*resizableradius+150,2*resizableradius+150);
   
    b-=1;
    if (b<=-360){
        b=0;
    }
    c2.restore();
   
    

    
    

    
    
    

}

animate2();

function animate3(){
    requestAnimationFrame(animate3);
    c3.clearRect(0,0,innerWidth,innerHeight);
    c3.save();
    c3.translate(innerWidth/2,(innerHeight-1)/2);
    c3.rotate(e*deg);   
    c3.drawImage(base_image2,-resizableradius-75,-resizableradius-75,2*resizableradius+150,2*resizableradius+150);
    e+=2;
    if(e>=360){
        e=0;
    }
    c3.restore();   

}

animate3();

function animate4(){
    requestAnimationFrame(animate4);
    c4.clearRect(0,0,innerWidth,innerHeight);
    c4.save();
    c4.translate(innerWidth/2,(innerHeight-1)/2);
    c4.rotate(d*deg);   
    c4.drawImage(base_image3,-resizableradius-75,-resizableradius-75,2*resizableradius+150,2*resizableradius+150);
    d-=4;
    if (d<=-360){
        d=0;
    }
    c4.restore();   

}

animate4();


