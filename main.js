
var lastx,lasty;
color="black";
width_of_line=5;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

wd=screen.width-70;
var w=screen.width;
height=screen.height-300;
if(w<992){
    document.getElementById("mycanvas").width=wd;
    document.getElementById("mycanvas").height=height;

}
canvas.addEventListener("touchstart",md);
function md(e){
    color1=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    lastx = e.touches[0].clientX-canvas.offsetLeft;
    lasty = e.touches[0].clientY- canvas.offsetTop;
}
canvas.addEventListener("touchmove",mv);
function mv(e){
    currentx = e.touches[0].clientX-canvas.offsetLeft;
currenty = e.touches[0].clientY- canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();

lastx=currentx;
lasty=currenty;
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
