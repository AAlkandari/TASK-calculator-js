/**
 *
 * Pre defined function that will allow you to print on the console black screen.
 * You pass it a text, and it prints it
 */
function printOnConsole(text) {
  console.log(text);
  document.getElementById("console").innerText = `${text}`;
}

/***
 * challenging part
 * History function
 * You are going to use updateHistory function when you implement the history part.
 * updateHistory takes an array of strings, and it just renders it
 */

// DON'T TOUCH THIS CODE
function updateHistory(historyArray) {
  const listComponent = (text) =>
    `
        <li>
            ${text}
        </li>
        
    `;
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = historyArray
    .map((historyInstance) => listComponent(historyInstance))
    .join("");
}

