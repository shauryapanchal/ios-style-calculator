const display= document.querySelector(".display");
const num=document.querySelectorAll(".num");
const backButton= document.querySelector(".back-button");
const clearButton= document.querySelector(".clear-button");
const operator= document.querySelectorAll(".operator-button");
const equalTo= document.querySelector(".equals-button");
let currentNumber;
let finalNumber;
let previousOperator="";

equalTo.addEventListener('click', ()=>{
    operation("");
    display.innerText=finalNumber;
    finalNumber=0;
    currentNumber=0;
});

operator.forEach(button =>{
   button.addEventListener('click', ()=>{
    operation(button.innerText);
   }); 
});

clearButton.addEventListener('click', ()=> {
    display.innerText="0";
    currentNumber="";
    finalNumber="";
});

backButton.addEventListener('click', ()=>{
    removeNumber();
});

num.forEach(button => {
    button.addEventListener('click',()=>{
        appendNumber(button.innerText);
    })
});

function operation(sign){
    currentNumber=+display.innerText;
    display.innerText="0";
    if(previousOperator===""){
        finalNumber=currentNumber;
        previousOperator=sign;
    }
    else if(previousOperator==="+"){
        finalNumber=add(finalNumber, currentNumber);
        previousOperator=sign;
    }
    else if(previousOperator==="-"){
        finalNumber=subtract(finalNumber, currentNumber);
        previousOperator=sign;
    }
    else if(previousOperator==="÷"){
        finalNumber=divide(finalNumber, currentNumber);
        previousOperator=sign;
    }
    else{
        finalNumber=multiply(finalNumber, currentNumber);
        previousOperator=sign;
    }
}
function appendNumber(digit){
    if(digit==="0" && display.innerText==="0"){
        return;
    }
    else if(display.innerText==="0"){
        display.innerText="";
        display.innerText+=digit;
    }
    else{
        display.innerText+=digit;
    }
}
function removeNumber(){
    string = display.innerText;
    if(string.length===1){
        display.innerText="0";
    }
    else{
        display.innerText=string.slice(0,-1);
    }
}
function add(a,b=0){
    return (a+b).toFixed(10);
}
function multiply(a,b=1){
    return a*b.toFixed(10);
}
function divide(a,b=1){
    return (a/b).toFixed(10);
}
function subtract(a,b=0){
    return (a-b).toFixed(10);
}