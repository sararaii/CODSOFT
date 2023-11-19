let result = document.getElementById("result");

let history = document.getElementById("history");
let currentExpression = "";

function appendToResult(value) {
    currentExpression += value;
    result.textContent = currentExpression;
}

function clearResult() {
    currentExpression = "";
    result.textContent = currentExpression;
}

function calculateResult() {
    try {
        const expressionResult = eval(currentExpression);
        history.textContent += `${currentExpression} = ${expressionResult}\n`;
        
        currentExpression = expressionResult.toString();
        
        result.textContent = currentExpression;
    } catch (error) {
        result.textContent = "Error";
    }
}

