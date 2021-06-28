/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */
const sum = document.querySelector(".sum")
const percentage = document.querySelector(".percentage")
const button = document.querySelector(".submitButton")
const currency = "$"

button.addEventListener("click", () => {
  button.classList.toggle("active");
  console.log("Button was clicked!");
}, false);

console.log(sum + percentage)

 const tipCalculator = (sum, percentage, currency) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
    console.log(`
    Sum before tip: ${currency}${sum}
    Tip percentage: ${percentage}%
    Tip:            ${currency}${tip.toFixed(2)}
    Total:          ${currency}${total.toFixed(2)}
  `);
  };
  
  

 