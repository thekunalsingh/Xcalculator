const defaultResult = 0;

let currentResult = defaultResult;

let calldescription;
let arraya = [];
console.log(historycalc.textContent);
console.log("cjccbncncncncn \n dnhdudjdh");

function operationHistroy(operator, intialvalue, othervalue){
    let opData = {
        intialvalue: intialvalue,
        operator:operator,
        inputValue:othervalue,
        equalto:"=",
        Result:currentResult};
    arraya.push(opData);
    console.log(opData);
    console.log(arraya);
    Datahis(arraya);
}
function Datahis(histroy,value) {
    let text = "  Step 1:-  ";
    if (value) {
        text = "  Step 1:-  ";
        return;
    }
     let arr = [];
     arr = histroy;
     console.log("histroy", arr);
     let i = 2;
     console.log(i);
       console.log(i);
       for (const a of arr) {
           for(const ob in a){
               let value = a[ob];
               value.toString();
               text+= value;
               text+=" ";
               
           }
           historycalc.textContent = text;
           text += `  ||  step ${i}:-  `;
           i++;
       }
    }

function getuserinput() {
    return parseInt(userInput.value);
}

function calculationGoingOn(operator, intialvalue, othervalue) {
    calldescription = `${intialvalue} ${operator} ${othervalue}`;
    operationHistroy(operator, intialvalue ,othervalue);
    outputResult(currentResult, calldescription);

}
 function calcClear(){
     userInput.value = null;
    
 }
  function calcReset(){
      calldescription = "0";
      currentResult = 0;
      outputResult(currentResult, calldescription);
      historycalc.textContent = "No calculation is done yet";
      let value = true;
      arraya=[];
      Datahis(histroy, value);

  }
function Calculation(calcop) {
    let calcoperator;
    const encounterno = getuserinput();
    const intialvalue = currentResult;
    if (calcop === "ADD") {
        currentResult += encounterno;
        calcoperator = "+";
    } else if (calcop === "SUBTRACT") {
        currentResult -= encounterno;
        calcoperator = "-";

    } else if (calcop === "MULTIPLY") {
        currentResult *= encounterno;
        calcoperator = "X";

    } else if (calcop === "Division" ){
        if (encounterno === 0) {
            alert(`${currentResult} dived by 0 is not defined`);
            return;
        }
        else {
            currentResult /= encounterno;
            calcoperator = "/";
        }
    }
    calculationGoingOn(calcoperator, intialvalue, encounterno);
    calcClear();

}
addBtn.addEventListener('click', Calculation.bind(this,"ADD"));
subtractBtn.addEventListener('click', Calculation.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener('click', Calculation.bind(this, "MULTIPLY"));
divideBtn.addEventListener('click', Calculation.bind(this, "Division"));
resetbtn.addEventListener('click',calcReset);

