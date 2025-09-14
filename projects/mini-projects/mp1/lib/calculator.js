let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let result = document.getElementById("result")

function doAdd(){
    result.innerHTML = String(Number(num1.value) + Number(num2.value));
}

function doSubtract(){
    result.innerHTML = String(Number(num1.value) - Number(num2.value));
}

function doMultiply(){
    result.innerHTML = String(Number(num1.value) * Number(num2.value));
}

function doDivide(){
    result.innerHTML = String(Number(num1.value) / Number(num2.value));
}

function doPower(){
    result.innerHTML = String(Number(num1.value) ** Number(num2.value));
}

function clearCalc(){
    num1.value = "";
    num2.value = "";
    result.innerHTML = "0";
}