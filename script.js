const display = document.getElementById('display');

function addDisplay(input){
    display.value+=input;
}

function limpar(){
    display.value="";
}

function calcular(){
    display.value= eval(display.value);
}