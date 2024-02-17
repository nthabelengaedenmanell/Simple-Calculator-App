/*
simple calculator app that can perform basic arithmetic 
operations like addition, subtraction, multiplication, and division. 
The app will have a user interface with buttons and input fields to 
facilitate user interaction.
*/

/*
This function calculates the result based on the
 user's input and selected operation.
 */

function calculate() {
  // Get the values of the input fields
  const a = document.getElementById("num1").value;
  const b = document.getElementById("num2").value;

  // Get the state of the operation checkboxes
  let calAddition = document.getElementById("addition").checked;
  let calSubtraction = document.getElementById("subtraction").checked;
  let calMultiplication = document.getElementById("multiplication").checked;
  let calDivision = document.getElementById("division").checked;

  // Addition: This function adds two numbers and returns the result.
  function add(a, b) {
    return a + b;
  }

  // Subtraction: This function subtracts the second number from the first number and returns the result.
  function subtract(a, b) {
    return a - b;
  }

  // Multiplication: This function multiplies two numbers and returns the result.
  function multiply(a, b) {
    return a * b;
  }

  // Division: This function divides the first number by the second number and returns the result.
  function divide(a, b) {
    return a / b;
  }

  // Initialize the output variable
  let output = "";

  // Check which operation was selected and calculate the result accordingly
  if (calAddition) {
    output = add(parseInt(a), parseInt(b));
  } else if (calSubtraction) {
    output = subtract(parseInt(a), parseInt(b));
  } else if (calDivision) {
    output = divide(parseInt(a), parseInt(b));
  } else {
    output = multiply(parseInt(a), parseInt(b));
  }

  // Display the result in the output element
  document.getElementById("output").textContent = output;
}