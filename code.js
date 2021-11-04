let numLine=document.getElementsByClassName("numberLine")[0];
let eqButt=document.querySelector("#eq");
let numbers=document.querySelectorAll("#num");
let action=document.querySelectorAll("#action");
let upBg=document.querySelector(".upBg");
let AC=document.querySelector("#AC");
let delsim=document.querySelector(".delsim");
let tochka=document.querySelector(".tochka");
let line2=document.querySelector(".line2");
var bul = false;
let currentAction = "";
let currentNumber = "";
let firstNumber;


action.forEach(i=> i.addEventListener("click", (e)=>{actionPressed(e)}));
bul = false;

AC.addEventListener("click", ()=>{
currentAction = "";
currentNumber = "";
firstNumber = "";
numLine.innerHTML="";
line2.innerHTML="";
})

function actionPressed(e){
    bul = false;
    if (currentAction=="") 
    {
        if (e.target.innerText=="-") 
        {
            if (currentNumber=="") 
            {
                currentNumber="-";
                numLine.innerHTML="-";
                return;
            }    
                    else{ 
                   numLine.innerHTML=numLine.innerHTML+e.target.innerHTML;
                    currentAction=e.target.innerText;
                    firstNumber=currentNumber;
                    currentNumber=""; 
                    return;
                }
        }
        if (currentNumber=="") {
            err();
            return;
        }
        else{      
            numLine.innerHTML=numLine.innerHTML+e.target.innerHTML;
            currentAction=e.target.innerText;
            firstNumber=currentNumber;
            currentNumber=""; 
        }
 
    }
    else{
        err();
    }
}

numbers.forEach(i=> i.addEventListener("click", (e)=>{getNumber(e)}));

function getNumber(arg){
    if (arg == "get") {
        return(currentNumber);
    }
    currentNumber=currentNumber+arg.target.innerHTML;
    numLine.innerHTML=numLine.innerHTML+arg.target.innerHTML;
};


eqButt.addEventListener("click", ()=>{
    bul = true;
    line2.innerHTML=numLine.innerHTML+"=";
    switch (currentAction) {
        case "+": numLine.innerHTML=(Number(firstNumber)+Number(currentNumber)).toFixed(2); break;
        case "-": numLine.innerHTML=(Number(firstNumber)-Number(currentNumber)).toFixed(2); break;
        case "÷":numLine.innerHTML=(Number(firstNumber)/Number(currentNumber)).toFixed(2);  break;
        case "×":numLine.innerHTML=(Number(firstNumber)*Number(currentNumber)).toFixed(2); break;
    }
    currentNumber=numLine.innerHTML;
    currentAction = "";
});

delsim.addEventListener("click", ()=>{
    if (currentAction =="" && bul==false){
        if(firstNumber==null){
            currentNumber=currentNumber.slice(0,-1);
            numLine.innerHTML = currentNumber;
        } else {
            currentNumber=firstNumber.slice(0,-1);
            firstNumber="";
            numLine.innerHTML=currentNumber;
        }
    }
    if(currentAction!=="" && bul==false && currentNumber==""){
        numLine.innerHTML = firstNumber;
        currentAction="";
    }
    if (currentAction!=="" && bul==false && currentNumber!==""){
    currentNumber=currentNumber.slice(0,-1);
    numLine.innerHTML = firstNumber+currentAction+currentNumber;
    }
    if (bul){
        currentNumber=currentNumber.slice(0,-1)
        numLine.innerHTML=currentNumber;
    }
});

tochka.addEventListener("click", ()=>{

    if (currentNumber.toString().indexOf(".")===-1){
        numLine.innerHTML+=".";
        currentNumber+="."
    } 
});