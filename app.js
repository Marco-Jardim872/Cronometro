"user strict"
var hora = 0;
var min = 0;
var seg = 0;
var tempo = 1000;//milésimos de segundos
var cron;

function iniciar() {
    cron = setInterval(timer, tempo);
}
function pausar() {
    clearInterval(cron);
}
function parar() {
    clearInterval(cron);
    hora = 0;
    min = 0;
    seg = 0;

    document.getElementById("hora").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("seg").innerHTML = "00";
}
function timer() {
    seg++;
    if (seg == 60) {
        seg = 0;
        min++;
        if (min == 60) {
            min = 0;
            hora++;
        }
    }
let hR= hora < 10 ? "0"+hora : hora;
document.getElementById("hora").innerHTML = hR;
let mR= min < 10 ? "0"+ min : min;
document.getElementById("min").innerHTML = mR;
let sR= seg <10? "0"+ seg: seg;
document.getElementById("seg").innerHTML = sR;
   
}