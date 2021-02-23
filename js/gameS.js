/*eslint-env es6*/
const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

const bgpos = [96,64,448,256];
const lfpos = [96,96,224,224];
const cfpos = [208,96,224,224];
const chSz = 112; //Size of each char frame
const txtcolor = 'white';
const line_space = 20;
const txtpos = [96,320+line_space];

const mainF={
    tipo:0,
    BGB: document.getElementById("bg1"),
    BGF: document.getElementById("fg1"),
    LFB: document.getElementById("ch0"),
    LEM: 0,
    LFF: document.getElementById("cl1"),
    RGB: document.getElementById("ch0"),
    REM: 1,
    RGF: document.getElementById("cl1"),
    CTB: document.getElementById("ch0"),
    CEM: 1,
    CTF: document.getElementById("cl1"),
    TXT: "Test \n Test \n Test",
    MARCOS: 3
};


function jeff(){
    if(mainF.MARCOS>100){
        if(mainF.LEM>7){
            mainF.LEM=0;
        }
        else{
            mainF.LEM+=1;
        }
        mainF.MARCOS=0;
    }
    else{
        mainF.MARCOS+=1;
    }
    
}

/**
 * Break the mainF.TXT to fit in dialog box
**/
function show_dialog(){
    line_ome = mainF.TXT;
    line_two = "";
    line_three = "";
    
}


function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(mainF.BGB,bgpos[0],bgpos[1],bgpos[2],bgpos[3])
    ctx.drawImage(mainF.BGF,bgpos[0],bgpos[1],bgpos[2],bgpos[3])
    ctx.drawImage(mainF.LFB,chSz*mainF.LEM,0,chSz,chSz,lfpos[0],lfpos[1],lfpos[2],lfpos[3]) //source origins, source size, destination origins, destination size
    ctx.drawImage(mainF.LFF,chSz*mainF.LEM,0,chSz,chSz,lfpos[0],lfpos[1],lfpos[2],lfpos[3])
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(mainF.RGB,chSz*mainF.REM,0,chSz,chSz,lfpos[0],lfpos[1],lfpos[2],lfpos[3])
    ctx.drawImage(mainF.RGF,chSz*mainF.REM,0,chSz,chSz,lfpos[0],lfpos[1],lfpos[2],lfpos[3])
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(mainF.CTB,chSz*mainF.CEM,0,chSz,chSz,cfpos[0],cfpos[1],cfpos[2],cfpos[3])
    ctx.drawImage(mainF.CTF,chSz*mainF.CEM,0,chSz,chSz,cfpos[0],cfpos[1],cfpos[2],cfpos[3])
    let dialog = mainF.TXT
    ctx.font = '16px arial'
    ctx.textAlign = 'left'
    ctx.fillStyle = txtcolor
    ctx.fillText(dialog,txtpos[0],txtpos[1])

    
    let output = `Marcos : ${mainF.MARCOS}`;
    ctx.font = '24px arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText(output, 300, 30);
    jeff();
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
draw();

