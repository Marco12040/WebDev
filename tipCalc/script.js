/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */
const sum = document.querySelector(".sum")
const percentage = document.querySelector(".percentage")
const button = document.querySelector(".submitButton")



percentage.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    console.log(`You Entered %:  ${percentage.value} for the percentage`)
  }
});

sum.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    console.log(`Your entered $  ${sum.value} for the sum`)
  }
});

button.addEventListener("click", e =>{
  let sum1 = sum.value
  let percentage1 = percentage.value
  console.log('Inside the button function')
  //tipCalculator(sum1, percentage1, currency1)
  tipCalculator(sum.value, percentage.value)  
  alert(tipCalculator(sum.value, percentage.value))
  
})

 const tipCalculator = (sum, percentage) => {
    console.log('Inside the Tip Calculator function')
    let tip = Number(sum) * (Number(percentage) / 100);
    let total = Number(sum) + Number(tip);

    console.log(`
    Sum before tip: $${sum}
    Tip percentage: ${percentage}%
    Tip:            $${tip.toFixed(2)}
    Total:          $${total.toFixed(2)}
  `);
    let prompt = `
    Sum before tip: $${sum}
    Tip percentage: ${percentage}%
    Tip:            $${tip.toFixed(2)}
    Total:          $${total.toFixed(2)}
  `
  return prompt

  };
  
  

 