/*eslint-env es6*/
const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

const bgpos = [96,64,448,256];
const lfpos = [96,96,224,224];
const chSz = 112; //Size of each char frame

const mainF={
    tipo:0,
    BGB: document.getElementById("bg1"),
    BGF: document.getElementById("fg1"),
    LFB: document.getElementById("ch0"),
    LEM: 1
};



function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(mainF.BGB,bgpos[0],bgpos[1],bgpos[2],bgpos[3])
    ctx.drawImage(mainF.BGF,bgpos[0],bgpos[1],bgpos[2],bgpos[3])
    ctx.drawImage(mainF.LFB,chSz*mainF.LEM,0,chSz,chSz,lfpos[0],lfpos[1],lfpos[2],lfpos[3]) //source origins, source size, destination origins, destination size
}



draw()

