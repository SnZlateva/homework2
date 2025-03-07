function calculator() {

    let result;

  // Use a switch statement to determine which operation to perform
  switch (operator) {
    case '+':
      result = num1 + num2;
      break; // Break out of the switch statement
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      // If the operator is not one of the above, throw an error
      throw new Error('Invalid operator');
  }

  return result;
}

module.exports = calculator;
