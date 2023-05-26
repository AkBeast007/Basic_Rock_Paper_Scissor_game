const r = 1;
const p = 2;
const s = 3;

var rck = document.getElementById("rock");
var pap = document.getElementById("paper");
var sci = document.getElementById("scissors");

var scr = document.getElementById("score");

function rock_func(){
    rck = Math.floor(Math.random()*3)+1;
    if(r==rck){
         scr.innerHTML = "You selected ROCK <br> Computer Selected ROCK <br> MATCH DRAW!";
    }
    else if(rck>r && rck==2){
        scr.innerHTML = "You selected ROCK <br> Computer Selected PAPER <br> COMPUTER WINS!";
    }

    else if(rck>r && rck==3){
        scr.innerHTML = "You selected ROCK <br> Computer Selected SCISSOR <br> YOU WIN!";
    }
}

function pap_func(){
    pap = Math.floor(Math.random()*3)+1;
    if(p==pap){
         scr.innerHTML = "You selected PAPER <br> Computer Selected PAPER <br> MATCH DRAW!";
    }
    else if(pap>p && pap==3){
        scr.innerHTML = "You selected PAPER <br> Computer Selected SCISSOR <br> COMPUTER WINS!";
    }

    else if(pap<p && pap==1){
        scr.innerHTML = "You selected PAPER <br> Computer Selected ROCK <br> YOU WIN!";
    }
}

function sci_func(){
    sci = Math.floor(Math.random()*3)+1;
    if(sci==s){
         scr.innerHTML = "You selected SCISSOR <br> Computer Selected SCISSOR <br> MATCH DRAW!";
    }
    else if(sci<s && sci==2){
        scr.innerHTML = "You selected SCISSOR <br> Computer Selected PAPER <br> YOU WIN!";
    }

    else if(sci<s && sci==1){
        scr.innerHTML = "You selected SCISSOR <br> Computer Selected ROCK <br> Computer WINS!";
    }
}

function res_func(){
   scr.innerHTML = "";
}