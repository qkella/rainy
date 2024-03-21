let canvas=document.querySelector('.rain');
let rain=canvas.getContext("2d");
let drop_width = 0.3;
let drop_height= 3;
let dropsx=[];
let dropsy=[];
let speed=[];
let timer;
function create(){
    for (i=0;i<800;i++){
        let x=Math.random()*canvas.width;
        let y=Math.random()*canvas.height-1;
        let s=Math.random()*6+1;
        dropsx.push(x);
        dropsy.push(y);
        speed.push(s);
    }
}


function move(){
    for (i=0;i<800;i++){
        dropsy[i]=dropsy[i]+speed[i];
        if (dropsy[i]>=canvas.height){
            dropsy[i]=0;
            dropsx[i]=Math.random()*canvas.width;
        }
    }
}

function draw(){
    for (i=0;i<800;i++){
        rain.beginPath();
        rain.fillStyle='gray';
        rain.fillRect(dropsx[i],dropsy[i],drop_width,drop_height);

    }
}

function engine(){
    rain.clearRect(0,0,canvas.width,canvas.height);
    move();
    draw();
}
create();
timer=setInterval(engine,5);