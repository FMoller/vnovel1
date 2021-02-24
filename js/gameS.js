/*eslint-env es6*/
const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

const bgpos = [96,64,448,256];
const lfpos = [96,96,224,224];
const cfpos = [208,96,224,224];
const chSz = 112; //Size of each char frame
const txtcolor = 'white';
const line_space = 20;
const block_s = 32
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
    TXT: "Jefferina aways wanted a fantasy game, but she ended shoting the fucking lasers in the space. When Mizurian says he does not know to play a game, that means he is almost in the pro-lvl. Marcos won a Hugo prize before Moeller and Nec. But Moeller is trying to compete with bethesda for the title the most bugged game ever.",
    OPC: ["Text option 1","Text option 2","Text option 3","Text option 4"],
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

function show_dialog(){ //Should reimplement it as array in the future
    let line_one = "";
    let line_two = "";
    let line_three = "";
    let line_four = "";
    let line_five = "";
    let line_six = "";
    const base = 2.1*bgpos[2]/16
    if(mainF.TXT.length < base){
        line_one = mainF.TXT;
    }
    else if(mainF.TXT.length < 2*base){
        line_one = mainF.TXT.slice(0,base);
        line_two = mainF.TXT.slice(base, 2*base);
        
    }
    else if(mainF.TXT.length < 3*base){
        line_one = mainF.TXT.slice(0,base);
        line_two = mainF.TXT.slice(base, 2*base);
        line_three = mainF.TXT.slice(2*base, 3*base);
        
    }
    else if(mainF.TXT.length < 4*base){
        line_one = mainF.TXT.slice(0,base);
        line_two = mainF.TXT.slice(base, 2*base);
        line_three = mainF.TXT.slice(2*base, 3*base);
        line_four = mainF.TXT.slice(3*base, 4*base);
        
    }
    else if(mainF.TXT.length < 5*base){
        line_one = mainF.TXT.slice(0,base);
        line_two = mainF.TXT.slice(base, 2*base);
        line_three = mainF.TXT.slice(2*base, 3*base);
        line_four = mainF.TXT.slice(3*base, 4*base);
        line_five = mainF.TXT.slice(4*base, 5*base);
        
    }
    else{
        line_one = mainF.TXT.slice(0,base);
        line_two = mainF.TXT.slice(base, 2*base);
        line_three = mainF.TXT.slice(2*base, 3*base);
        line_four = mainF.TXT.slice(3*base, 4*base);
        line_five = mainF.TXT.slice(4*base, 5*base);
        line_six = mainF.TXT.slice(6*base, 7*base);
        
    }
    ctx.font = '16px arial';
    ctx.textAlign = 'left';
    ctx.fillStyle = txtcolor;
    ctx.fillText(line_one,txtpos[0],txtpos[1]);
    ctx.fillText(line_two,txtpos[0],txtpos[1]+line_space);
    ctx.fillText(line_three,txtpos[0],txtpos[1]+2*line_space);
    ctx.fillText(line_four,txtpos[0],txtpos[1]+3*line_space);
    ctx.fillText(line_five,txtpos[0],txtpos[1]+4*line_space);
    ctx.fillText(line_six,txtpos[0],txtpos[1]+5*line_space);
}

/**
 * Display the options in the frame
**/
function display_opt(){
    var i;
    for(i = 0;i < 4;i++){
        ctx.font = '16px arial';
        ctx.textAlign = 'left';
        ctx.fillStyle = txtcolor;
        ctx.fillText(mainF.OPC[i],txtpos[0]+block_s,txtpos[1]+8+i*block_s);
    }
}

/**
 * Display all text
**/
function display_all_text(){
    if(mainF.tipo==2){
        show_dialog();
    }
    else if(mainF.tipo==0){
        display_opt();
    }
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
    
    display_all_text();

    
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

