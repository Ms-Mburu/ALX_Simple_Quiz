// Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Event Listeners
document.getElementById('add').addEventListener('click', function () {
    performCalculation(add);
});

document.getElementById('subtract').addEventListener('click', function () {
    performCalculation(subtract);
});

document.getElementById('multiply').addEventListener('click', function () {
    performCalculation(multiply);
});

document.getElementById('divide').addEventListener('click', function () {
    performCalculation(divide);
});

// Generalized Calculation Function
function performCalculation(operation) {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;

    const result = operation(num1, num2);

    document.getElementById('calculation-result').textContent = result;
}