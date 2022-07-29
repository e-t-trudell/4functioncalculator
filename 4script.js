console.log("PEMDAS has arrived...")

var displayDiv = document.querySelector("#display");
var num = document.getElementsByClassName(".number");
// numbers entered
var num1 = "";
// final display
var num2 = "";
var operator = "";

function press(element){
    console.log(element.innerText);
    var x = element.innerText
    num1 += x;
    displayDiv.innerText = num1;
}

function setOP(value){
    console.log(value);
    num1 = displayDiv.innerText;
    // console.log(num1);
    num2 = displayDiv.innerText;
    operator = value;
    num2 = num1;
    num1= "";
}

function calculate(value){
    var result = 0
    if (operator == '/'){
        result = parseFloat(num2) / parseFloat(num1);
        // console.log(result);
    }
    if (operator == '*'){
        result = parseFloat(num2) * parseFloat(num1);
        // console.log(result);
    }
    else if (operator == '+'){
        result = parseFloat(num2) + parseFloat(num1);
        // console.log(result);
    }
    else if (operator == '-'){
        result = parseFloat(num2) - parseFloat(num1);
        // console.log(result);
    }
    displayDiv.innerText = result;
    console.log(result);
}

function clr(){
    displayDiv.innerText = 0;
}

// add rules to jquery function
// $("button").click(functionname()){
//     what happens 
// }