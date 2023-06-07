const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

document.addEventListener("keydown", tusHareketleri);

let x = 200; //sol
let y = 200; //yukarı

let hareketX = 0;
let hareketY = 0;

setInterval(()=> {
    oyunuCiz();
},100) 


function oyunuCiz(){
    oyunuTemizle();
    yilaniCiz();   

    x = x + hareketX * 20;
    y = y + hareketY *20;
    if(x < -20){
        alert("Oyun bitti!");
        x = 200;
        window.location.reload();        
    }

    if(y < 0){
        y = 400;
    }
   


}   



function oyunuTemizle(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,400,400);
}

function yilaniCiz(){
    ctx.fillStyle = "white";
    ctx.fillRect(x,y,18,18);
}

function tusHareketleri(e){
    if(e.keyCode == 37){ //sol
        hareketX = -1;
        hareketY = 0;
    }else if(e.keyCode == 38){ //yukarı
        hareketX = 0;
        hareketY = -1;
    }else if(e.keyCode == 39){ //sağa
        hareketX = 1;
        hareketY = 0;
    }else if(e.keyCode == 40){ //aşağı
        hareketX = 0;
        hareketY = 1;
    }
}