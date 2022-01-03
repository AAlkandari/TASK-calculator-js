/**
 *
 * This function will be called when clicking on any button.
 * It's going to give you text as a parameter
 * This is your starting point
 * If you click on button 0, the text will be "0"
 * If you click on button +, the text will be "+"
 * ,... and so on
 */

 let consoleText = "0";
 let num1 = null;
 let num2 = null;
 let operation = null;
 let Operations = false;
 let history = [];
 
 printOnConsole(consoleText);

 function buttonClick(text) {
   console.log("Clicking", text);
   const parsedInt = parseInt(text);
   if (isValidOp(text)) {
     Operations = true;
     NumForOperation(text);
   } 
   else if (isNum(text)) {
     selectNumber(text);
   } 
   else {
     switch (text) {
      case "=":
        Results();
        break;
       case "AC":
        clear();
        break;
     }
   }
 }

 function result(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "÷":
      return num1 / num2;
  }
}
 
 function Results() {
  num2 = parseInt(consoleText);
  const res = result(num1, num2, operation);
  history.push(`${num1} ${operation} ${num2} = ${res}`);
  consoleText = `${res}`;
  printOnConsole(consoleText);
  updateHistory(history);
 }

 function isNum(text) {
   return parseInt(text) >= 0 && parseInt(text) <= 9;
 }

 function removeZeros(text) {
  return `${parseInt(text)}`;
}

function selectNumber(text) {
   if (Operations) {
     consoleText = `${removeZeros(text)}`;
     printOnConsole(consoleText);
     Operations = false;
   } else {
     consoleText += `${text}`;
     consoleText = removeZeros(consoleText);
     printOnConsole(consoleText);
   }
 }

 function NumForOperation(text) {
   if (operation === null) {
     num1 = parseInt(consoleText);
     console.log("Num1 is  ", consoleText);
   } 
   else if (num2 !== null) {
     num2 = parseInt(consoleText);
     console.log("Num2 is  ", consoleText);
   }
 }
 
 function isValidOp(text) {
   return ["+", "-", "x", "÷"].includes(text);
 }
 
 function clear() {
   consoleText = "0";
   printOnConsole(consoleText);
 }
 
 

/** Supporting functions
 * 1. `printOnConsole(text)`, takes any text, and renders the console part of the web page
 * 2. `updateHistory(array)`, takes an array of strings and renders it on the web page
 */

// Remove Me after testing
//printOnConsole("123");
//updateHistory(["This is a sample historry", "1 + 5 = 6", "5 x 10 = 50"]);