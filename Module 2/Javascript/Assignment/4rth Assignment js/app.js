function calculate(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
    } else {
        return "Invalid operator!";
    }
}

let num1 = prompt("Enter first number:");
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = prompt("Enter second number:");

alert("Result: " + calculate(Number(num1), Number(num2), operator));
