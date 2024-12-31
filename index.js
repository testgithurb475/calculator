alert("Welcome")

var userName = prompt("Enter your name")
alert("Hello " + userName);

let num1 = parseFloat(prompt("Enter the first number:"));

let num2 = parseFloat(prompt("Enter the second number:"));

let operation = prompt("Enter the operation (+, -, *, /):");

let result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {

    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error: Division by zero is not allowed.";
    }
} else {
    result = "Invalid operation. Please use +, -, *, or /";
}

alert("The result is: " + result);
