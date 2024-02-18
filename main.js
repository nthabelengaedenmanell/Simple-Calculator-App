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

  // Retrieve the value of the "addition" checkbox element and store it in the variable calAddition.
  let calAddition = document.getElementById("addition").checked;
  // Retrieve the value of the "subtraction" checkbox element and store it in the variable calSubtraction.
  let calSubtraction = document.getElementById("subtraction").checked;
  // Retrieve the value of the "multiplication" checkbox element and store it in the variable calMultiplication.
  let calMultiplication = document.getElementById("multiplication").checked;
  // Retrieve the value of the "division" checkbox element and store it in the variable calDivision.
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

/* 
This function reloads the current webpage, 
effectively refreshing the page and resetting its state.
*/

/* 
The reload() method reloads the current document.
The reload() method does the same as the reload 
button in your browser.
*/
function resetCalculator() {
  /* The location.reload() method is a built-in function 
  in JavaScript that allows you to reload the 
  current webpage or document. */
  location.reload();
}
