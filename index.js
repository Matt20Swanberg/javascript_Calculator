const history = [];

// Function to add two numbers and return the sum
function addNumbers(a, b) {
    let x;
    if (typeof a !== "number" || typeof b !== "number") {
        //console.log("Error: Input must be numbers only");
        x = 'null';
    } else {
        x = a + b;
    }
    insertHistory(a, b, '+', x)
    return x;
}

// Function to subtract two numbers and return the difference
function subtractNumbers(a, b) {
    let x;
    if (typeof a !== "number" || typeof b !== "number") {
        //console.log("Error: Input must be numbers only");
        x = 'null';
    } else {
        x = a - b;
    }
    insertHistory(a, b, '-', x)
    return x;
}

// Function to multiply two numbers and return the product
function multiplyNumbers(a, b) {
    let x;
    if (typeof a !== "number" || typeof b !== "number") {
        //console.log("Error: Input must be numbers only");
        x = 'null';
    } else {
        x = a * b;
    }
    insertHistory(a, b, '*', x)
    return x;
}

// Function to divide two numbers and return the quotient
function divideNumbers(a, b) {
    let x;
    if (typeof a !== "number" || typeof b !== "number") {
        //console.log("Error: Input must be numbers only");
        x = 'null';
    }

    if (b === 0) {
        //console.log("Error: dividing by 0")
        x = 'null';
    }
    else {
        x = a / b;
    }
    insertHistory(a, b, '/', x)
    return x;
}

// Function to insert calculation into an object
function insertHistory(a, b, operator, result) {
    history.push({

        operation: operator,
        operand1: a,
        operand2: b,
        result: result
    });
}

// Function to store calculation history
function displayHistory() {
    if (history.length === 0) {
        //console.log("No calculations stored yet")
        return
    }
    console.log("Calculation History:");

    for (let i = 0; i < history.length; i++) {
        const historyindex = history[i];
        console.log(`${historyindex.operand1} ${historyindex.operation} ${historyindex.operand2} = ${historyindex.result}`)
    }
}

/************************************************************
*                  For testing purposes                     *
*************************************************************/
//debugger;
addNumbers(1, 2);       // 3
addNumbers(3, "a")      // null
subtractNumbers(10, 5); // 5
subtractNumbers(1, 3);  // -2
multiplyNumbers(2, 5);  // 10
multiplyNumbers('*', 6) // null
divideNumbers(9, 3);    // 3
divideNumbers(4, 0)     // null
displayHistory();       