let final="";
let current="";
let previousOperator="";
const display= document.querySelector(".display");

function buttonHandler(button){
    if(isNaN(parseInt(button))){
        symbolHandler(button);
    }
    else{
        numberHandler(button);
    }
}

function symbolHandler(sign){
    switch(sign){
        case 'C':
            rerender();
            final="";
            current="";
            previousOperator="";
            break;
        case '←':
            string =display.innerText;
            if(string.length<=1){
                rerender();
            }
            else{
                display.innerText=string.substring(0,string.length-1);
            }
            break;
        case '÷':
        case '×':
        case '+':
        case '-':
            current=display.innerText;
            previousOperator=sign;
            operation(sign);
            rerender();
            break;
        case '=':
            current=display.innerText;
            flushResult();
            break;
    }
}

function operation(sign){
    if(final===""){
        final=current;
        current="";
        return;
    }
    if(sign==='+'){
        final= (+final) + (+current);
    }
    else if(sign==='-'){
        final= (+final) - (+current);
    }
    else if(sign==='×'){
        final= (+final) * (+current);
    }
    else {
        final= (+final) / (+current);
    }
}

function numberHandler(num){
    if(display.innerText!="0"){
        display.innerText+=num;
    }
    else{
        display.innerText=num;
    }
}

function flushResult(){
    if(previousOperator===""){
        return;
    }
    else{
        operation(previousOperator);
        display.innerText=final;
        previousOperator="";
        final="";
        current="";
    }
}

function init(){
    const numButton = document.querySelectorAll("button");
    numButton.forEach(button => {
        button.addEventListener('click', ()=>{
            buttonHandler(button.innerText);
        });
    });
}

function rerender(){
    display.innerText="0";

}
init();