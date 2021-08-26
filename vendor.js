const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const resetbtn = document.getElementById('btn-reset');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;}

let historycalc = document.querySelector("p");

console.log(historycalc.textContent);

// function histroyData() {
//     let histroy;
//     history = Datahis();
//     let text = "";
//     let arr = [];
//     arr = histroy;
//     console.log("histroy", arr);
//     let i = 0;
//     console.log(i);
//     for (i = 0; i < arr.length; i++) {

//         text += arr[i] + "<br>";
//     }
//     historycalc.textContent = text;
    
// }