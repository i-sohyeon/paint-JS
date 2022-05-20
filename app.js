const canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext('2d');
//getContext() 메서드를 사용하여 드로잉 컨텍스트에 액세스

canvas.width = 700;
canvas.height = 700;
// canvas의 값을 지정해주지 않으면 펜이 그려지지 않음

ctx.strokeStyle = "#2c2c2c"; //그릴 선들에 대해 모두 컬러가 있음을 의미
ctx.lineWidth = 2.5;


let painting = false; 

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log(x,y);

    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }

}

function onMouseUp(event){
    stopPainting();
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}